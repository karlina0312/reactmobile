import React, { useState, useEffect } from "react";
import { 
	FlatList, 
	SafeAreaView, 
	StatusBar, 
	StyleSheet, 
	Text, 
	TouchableOpacity ,
	View,
	Button,
	Image
} from "react-native";


  
const Item = ({ item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity> 
);
  



const popup = ({navigation}) => {
    const [selectedId, setSelectedId] = useState(null);
    const [DATA, setDATA] =  useState(null);

    useEffect(() => {
        Material();
    },[]);
    const Material= () => {
        return fetch('http://192.168.1.4:5000/api/structure',
	        {
            	method: 'GET',
            	headers : {
            		'Content-Type' : "application/json",
            	}
            })
            .then((response) => response.json())
            .then((res)=> {
                // this.setState({
                //     dataSource: res[1].SubModule
                // })
                // DATA(res[1].SubModule);
                // console.log(DATA);
                console.log('res ',res);
                console.log(res[1].SubModule);
                const material = res[1].SubModule;
                setDATA(material);
            })
    }  
    // console.log(Material());

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        console.log('render item');
        return (
            <Item
                item={item}
                onPress={() => { 
                    setSelectedId(item.id);
					navigation.navigate('Pdf');			
				}}
                onPress={() => {
                    setSelectedId(item.id);
                    navigation.navigate('Pdf');
                } }
                style={{ backgroundColor }}
            />
        );
    };

  
    return (
        <SafeAreaView style={styles.container}>
            {
                DATA != null &&
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                /> 
            }
            
        </SafeAreaView>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

  
export default popupscreen;
  