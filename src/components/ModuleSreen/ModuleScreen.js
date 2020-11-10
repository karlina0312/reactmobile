import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView} from "react-native";
import { GlobalContext } from '../../providers/ContextGlobalState'
import Module from '../Module';
import Category from '../Category';
import NavigationHeader from '../Global/NavigationHeader'
import TestIcon from '../../assets/icons/composeSvg'
import MaterialIcon from '../../assets/icons/folderSvg'
import LessonIcon from '../../assets/icons/classSvg'
import styles from './style';

const Icons = {
    Lesson: <LessonIcon fill="#fff" />,
    Material: <MaterialIcon fill="#fff" />,
    Test: <TestIcon fill="#fff" />
}

const ModuleScreen = ({navigation, data, type, parent, tabNavigation}) => {
    const {state, dispatch} = useContext(GlobalContext);
    const [moduleIndexs, setmoduleIndexs] = useState([]);
    const [module, setModule] = useState(null);
    const [hasCategory, setCategory] = useState(false);
    // const [Icon, setIcon] = useState(null)

    useEffect(() => { 
        setModule(data);
    },[]);

    useEffect(() => {
        const unsubscribe = tabNavigation.addListener('tabPress', e => {
            clearStack();
        });
    
        return unsubscribe;
    }, [navigation]);

    const clearStack = () => {
        setCategory(false);
        setmoduleIndexs([]);
        setModule(data);
    }
    

    const deleteIndex = () => {
        setCategory(false);
        moduleIndexs.pop();
        setmoduleIndexs([...moduleIndexs]);
        findSubModule();
    }

    const insertIndex = (index) => {
        moduleIndexs.push(index);
        setmoduleIndexs([...moduleIndexs]);
        findSubModule();
    }

    const findSubModule = () => {
        let tempModule = data;
        for (let i = 0; i < moduleIndexs.length; i++) {
            tempModule = tempModule.SubModule[moduleIndexs[i]];
        }

        if (!tempModule.SubModule || tempModule.SubModule.length === 0) setCategory(true)

        setModule(tempModule);
    }

    const drawPdf = (index) => {
        navigation.navigate('Pdf',{
            parent: parent,
            category: module.Categories[index]
        });
    }

    const drawTest = (index) => {
        navigation.push('newTest',{
            category: module.Categories[index],
        });
        
    }

    return  (
		<>
            <NavigationHeader 
                type={moduleIndexs.length === 0 ? null : 1}
                onPress={deleteIndex}
                title={module != null ? module.title : ''}
                icon={Icons[parent]}
            />
            <SafeAreaView style={styles.container}> 
                {
                    hasCategory
                        ? ( <Category
                                data={module.Categories}
                                onPress={ type === 1 ? drawTest: drawPdf }
                            />)
                        : (module != null &&  
                            <Module 
                                data={module.SubModule}
                                insertIndex={insertIndex}
                                parent={parent}
                            />)
                    
                }

            </SafeAreaView>
        </>
    )
};

export default ModuleScreen;