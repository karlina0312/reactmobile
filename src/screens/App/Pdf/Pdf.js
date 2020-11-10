import React, {useContext, useEffect, useState, useRef} from "react";
import { ScrollView, SafeAreaView, View, TextInput, Text, TouchableWithoutFeedback, TouchableOpacity, Alert } from "react-native";
import Pdf from 'react-native-pdf';
import { GlobalContext } from '../../../providers/ContextGlobalState'
import NavigationHeader from '../../../components/Global/NavigationHeader'
import ScrollScreen from '../../../components/Global/ScrollScreen'
import getPdfPath from '../../../services/pdf'
import PopUp from '../../../components/Global/PopUp'
import styles from './style';

const Pagination = ({numberOfPages, changePage, currentPageNumber}) => {
    const [pageList, setList] = useState(false);

    return(
        <>
            <TouchableWithoutFeedback
                onPress={() => {
                    setList(true);
                }}
            >
                <View style={styles.paging}>
                    <Text style={{color: '#fff', fontSize: 16}} editable={false}>{currentPageNumber}/{numberOfPages}</Text>
                </View>
            </TouchableWithoutFeedback>
            <PopUp 
                close={() => setList(false)}
                visible={pageList}
                body={<ScrollScreen 
                        max={numberOfPages} 
                        setPage={(page) => {setList(false); changePage(page);}} 
                    />}
            />
        </>
    );
}

export default ({navigation, route}) => {
    const {state, dispatch} = useContext(GlobalContext);
    const [page, setPage] = useState(0);
    const [num, setNum] = useState(0);
    const [source, setSource] = useState(null)

    const pdfRef = useRef();

    useEffect(() => {
        getPdfPath(route.params.parent, route.params.category.id)
        .then(result => {
            if (result != null) setSource(result);
        })
    },[])

    console.log('re rendering')

    return (
        <>
            <NavigationHeader 
                type={1}
                onPress={() => navigation.goBack()}
                title={route.params.category.title}
                headerComponent={
                    <Pagination 
                        numberOfPages={num} 
                        currentPageNumber={page} 
                        changePage={(page) => pdfRef.current.setPage(page)} 
                    />
                }
            />
            <SafeAreaView style={styles.container}>
                {
                    source != null && 
                    (
                        <Pdf
                            source={{uri: source}}
                            ref={pdfRef}
                            onLoadComplete={(numberOfPages,filePath)=>{
                                setNum(numberOfPages);
                            }}
                            onPageChanged={(page,numberOfPages)=>{
                                setPage(page);
                            }}
                            onError={(error)=>{
                                console.log('pdf error', error);
                                Alert.alert('Алдаа гарлаа');
                                navigation.goBack();
                            }}
                            onPressLink={(uri)=>{
                                console.log(`Link presse: ${uri}`)
                            }}
                            enablePaging={true}
                            style={styles.pdf}
                        />
                    )
                }
            </SafeAreaView>
        </>
    )
}
