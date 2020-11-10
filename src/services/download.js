import React, { useState, useEffect, useRef, useContext } from 'react'
import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    Dimensions, Platform
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import RNFetchBlob from 'rn-fetch-blob'
import { storeData, getData, clearAll } from '../providers/async'
import { fetchStructure, getLatesetVersion } from '../actions/structure'
import {GlobalContext} from '../providers/ContextGlobalState';
import { fetchQuestion } from '../actions/question'
const dirs = Platform.OS == 'ios'
        ? RNFetchBlob.fs.dirs.LibraryDir + '/Application Support/com.ByteLinks.StartTest/pdfs'
        : RNFetchBlob.fs.dirs;

const orderModule = (module) => {
    module.sort((a, b) =>  a.pos - b.pos );

    for (let i =0; i < module.length; i++) {
        if (module[i].SubModule && module[i].SubModule.length !== 0) module[i].SubModule = orderModule(module[i].SubModule);
        else if (module[i].Categories) module[i].Categories = orderModule(module[i].Categories);
    }

    return module;
}

const getCategories = (module) => {
    let categories = [];

    if (module.SubModule && module.SubModule.length !== 0) {
        for (let i = 0; i < module.SubModule.length; i++) {
            let tempCategories = getCategories(module.SubModule[i]);
            categories = [...categories, ...tempCategories];
        }
    } else {
        for (let i = 0; i < module.Categories.length; i++) {
            categories.push(module.Categories[i]);
        }
    }

    return categories;
}

const downlaodPdf = (url, id) => {
    return RNFetchBlob
        .config(Platform.OS === 'ios'
            ? {
                appendExt : 'pdf',
                fileCache : true,
                path: `${dirs}/${id}.pdf`,
            }
            : {
                appendExt : 'pdf',
                fileCache : true,
            }
        ).fetch('GET', encodeURI(url), {
            //some headers ..
        }).then((res) => {
            // the temp file path
            console.log(res.path())
            return res.path();
        }).catch(err => {
            console.log('downlaod error', err);
        })
}


export default (props) => {
    const {state, dispatch} = useContext(GlobalContext);
    const [p, change] = useState(0);
    const [isFailed, setFail] = useState(false);
    const [isFinished, setFinish] = useState(false);
    const marker = useRef(0);
    const total = 2;
    const mark = ['!','!!','!!!']

    const reDownload = async (categories, module) => {
        let errors = [];

        let jump = 50 / categories.length;
        let base = module === 'Lesson' ? 100 : 150;
    
        for (let i = 0; i < categories.length; i++) {
        // for (let i = 0; i < 1; i++) {

            console.log(module+' '+(i+1)+'/'+(categories.length)+'................'+categories[i].id);
            if (categories[i].file_url) {
                let asyncName = `${module}_${categories[i].id}`;
    
                let asyncData = await getData(asyncName);
                // if (!asyncData) {
                if (1) {
                    console.log(categories[i].id,'--',asyncData)
                    let filePath = await downlaodPdf(categories[i].file_url, categories[i].id);
                    console.log('downloading '+(i+1), categories[i].id, filePath);
                    if (filePath) await storeData(`${module}_${categories[i].id}`, filePath);
                    else errors.push(categories[i]);
                }
                change(base+ (i+1)*jump);
            }
        }
        if (errors.length > 0) errors = await reDownload(errors, module, jump);
    
        return errors;
    }

    const downloadAllPdf = async (catIDs)=> {
        try {
            if (catIDs === undefined) {
                let materialModule = await getData('Material');
                let lessonModule = await getData('Lesson');
        
                let categories = getCategories(lessonModule);
                let categories1 = getCategories(materialModule);
        
                let errors = await reDownload(categories, 'Lesson');
        
                console.log('Lesson errors', JSON.stringify(errors));
                
                // categories = getCategories(materialModule);
                console.log('Material errors', JSON.stringify(errors));
                
                errors = await reDownload(categories1, 'Material');
            }
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    
    const downloadQuestions = async (catIDs) => {
        try {
            let categories = catIDs;

            if (categories === undefined) {
                let questionModules = await getData('Test');
                categories = getCategories(questionModules);
                let jump = (100 -12 )/ categories.length;

                for (let i = 0; i < categories.length; i++) {
                    let asyncName = `Test_${categories[i].id}`;
                    let asyncData = await getData(asyncName);

                    if (!asyncData) {
                        let questions = await fetchQuestion(categories[i].id);
                        console.log(asyncName, '--', questions.length);
                        await storeData(asyncName, questions);
                    } else console.log(asyncName, '  has questions');
                    change(12+jump*(i+1));
                }
            } else {
                console.log(categories);
                let jump = (200)/ categories.length;
                for (let i = 0; i < categories.length; i++) {
                    let asyncName = `Test_${categories[i]}`;
                    let questions = await fetchQuestion(categories[i]);
                    console.log(asyncName, '--', questions.length);
                    await storeData(asyncName, questions);
                    change(jump*(i+1));
                }
            }
            console.log('done!!!!')
    
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    
    const downloadStructure = async () => {
        try {
            // await clearAll();
            let structure = await fetchStructure();
            structure = orderModule(structure);
    
            await storeData('Home', structure[0]);
            change(3)
            await storeData('Material', structure[1]);
            change(6)
            await storeData('Lesson', structure[2]);
            change(9)
            await storeData('Test', structure[3]);
            change(12)

            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        if (!isFailed) {
            if (!state.downloaded) {
                downloadStructure().then(structure => {
                    if (structure) {
                        downloadQuestions().then(questions => {
                            if (questions) {
                                downloadAllPdf().then(pdf => {
                                    if (pdf) {
                                        setFinish(true)
                                        storeData('downloaded',{downloaded: true});
                                    } else setFail(true);
                                })
                            } else setFail(true);
                        })
                    } else setFail(true);
                })
                
            } else if (!state.version.updated) {
                downloadQuestions(state.version.questions).then(questions => {
                    console.log('question report', questions);
                    if (questions) {
                        setFinish(true);
                        // downloadAllPdf(state.version.pdfs).then(pdf => {
                        // })
                    } else setFail(true)
                })
            } else setFinish(true);
        }
    },[isFailed])

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', width: Dimensions.get('window').width}}>
            {!isFailed 
                ?   (<>
                        <ProgressCircle
                            percent={p/total}
                            radius={100}
                            borderWidth={8}
                            color="#116EE2"
                            shadowColor="#ddebfb"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 61, color: '#116EE2', fontFamily: 'HelveticaNeue' }}>{Math.ceil(p/total)}<Text style={{fontSize: 20,}}>%</Text></Text>
                        </ProgressCircle>
                        <Text style={{ fontSize: 20, color: '#116EE2', fontFamily: 'HelveticaNeue', paddingTop:35 }}>{isFinished ? 'Татаж дууслаа' : `Татаж дуустал хүлээнэ үү ${mark[(marker.current++)%3]}`}</Text>
                        {
                            isFinished && <TouchableOpacity style={{
                                            width: '80%',
                                            height: 70,
                                            backgroundColor: '#116EE2',
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                            marginTop: 35,
                                            borderRadius: 13,
                                            }}
                                            onPress={() => {
                                                if (state.version === null || !state.version.updated) {
                                                    props.finished(0);
                                                } else {
                                                    props.finished(1);
                                                }
                                            }}
                                        >
                                            <Text style={{alignSelf: 'center', color: 'white', fontSize: 22}}>Эхлэх</Text>
                                        </TouchableOpacity>
                        }
                    </>)
                :   (<>
                        <Text style={{ fontSize: 30, color: '#116EE2', fontFamily: 'HelveticaNeue' }}>Алдаа гарлаа</Text>
                        <TouchableOpacity style={{
                                width: '80%',
                                height: 70,
                                backgroundColor: '#116EE2',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                borderRadius: 13,
                                marginTop: 35
                            }}
                            onPress={() => {
                                change(0);
                                setFail(false)
                            }}
                        
                        >
                            <Text style={{alignSelf: 'center', color: 'white', fontSize: 22}}>Дахин эхлүүлэх</Text>
                        </TouchableOpacity>

                    </>)

            }
        </SafeAreaView>
        
    )
}