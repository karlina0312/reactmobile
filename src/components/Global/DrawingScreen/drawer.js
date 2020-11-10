import React, { useState , useEffect} from "react";
import {
	Text,
	View,
	SafeAreaView,
	StatusBar,
	Button,
	Image,
	StyleSheet,
	TouchableOpacity,
    FlatList,
    Alert,
    ScrollView,
} from "react-native";

import {module} from './module';


const Drawer = () => {
    const [Ugugdul, setUgugdul] =  useState(null);

    useEffect(() => {
        Draawer();
    },[]);
    const Draawer= () => {
        return fetch('http://192.168.1.4:5000/api/structure',
	        {
            	method: 'GET',
            	headers : {
            		'Content-Type' : "application/json",
            	}
            })
            .then((response) => response.json())
            .then((res)=> {
                console.log('res ',res);
                console.log(res[1].SubModule);
                const Ugugdul = res[1].SubModule;
                setUgugdul(Draawer);
            })
    }  


  
    return (
        <>
        <SafeAreaView style={styles.container}>
            {
                Ugugdul != null &&
                <View
                    style={{
                        flexDirection: "row",
                        height: '100%',
						width: '100%',
                    }}
                >
                    <View style={{ 
						flexDirection:"column",
						backgroundColor:'white',
						height: '100%',
						borderRadius: 4,
						width: '100%',
						padding:2,
						flex: 0.5 
					    }}
					>  
					    <View style={{ 
						    flex: 0.5, 
							paddingVertical:2,
							}}
						>   
						    <TouchableOpacity
							    style={{
							    	flex: 1, 
							        borderRadius:10, 
							        paddingVertical:4,
							        borderColor: "#a3a0a0",
							        borderBottomWidth: 0.25,
							        borderTopWidth: 0.25,
							        borderLeftWidth: 0.25,
							        borderRightWidth: 0.25,
									width:'100%',
                                    height:'100%', 
							    }}
							    onPress={() => {
							    	navigation.navigate("Popup");
							    }}
						    >
							    <Image 
							        style={
							    		{
							    			flex: 0.8, 
							                borderRadius:10, 
							                paddingVertical:4,
							                borderColor: "#a3a0a0",
							                borderBottomWidth: 0.25,
							                borderTopWidth: 0.25,
							                borderLeftWidth: 0.25,
							                borderRightWidth: 0.25,
							    			width:'100%',
                                            height:'100%', 
							    		}
							    	}   
							    	// source = {require('../../../assets/1900851.png')} 
							    />
							</TouchableOpacity> 
						</View>
						<View style={{ 
							flex: 0.5,
							paddingVertical:2,  
							}}
						>   
						    <TouchableOpacity
							    style={{
							    	flex: 1, 
							        borderRadius:10, 
							        paddingVertical:4,
							        borderColor: "#a3a0a0",
							        borderBottomWidth: 0.25,
							        borderTopWidth: 0.25,
							        borderLeftWidth: 0.25,
							        borderRightWidth: 0.25,
									width:'100%',
                                    height:'100%', 
							    }}
							    onPress={() => {
							    	navigation.navigate("Popup");
							    }}
						    >
							    <Image 
							        style={{
										flex: 0.8, 
							            borderRadius:10, 
							            paddingVertical:4,
							            borderColor: "#a3a0a0",
							            borderBottomWidth: 0.25,
							            borderTopWidth: 0.25,
							            borderLeftWidth: 0.25,
							            borderRightWidth: 0.25,
										width:'100%',
                                        height:'100%',  
									}}   
								    // source = {require('../../../assets/111244630_3162631513774577_6144976767259763248_o.jpg')} 
							    />
							</TouchableOpacity> 
					    </View>
						<View style={{ 
							flex: 0.5,
							paddingVertical:2,
							}}
						>
                            <TouchableOpacity
							    style={{
							    	flex: 1, 
							        borderRadius:10, 
							        paddingVertical:4,
							        borderColor: "#a3a0a0",
							        borderBottomWidth: 0.25,
							        borderTopWidth: 0.25,
							        borderLeftWidth: 0.25,
							        borderRightWidth: 0.25,
									width:'100%',
                                    height:'100%', 
							    }}
							    onPress={() => {
							    	navigation.navigate("Popup");
							    }}
						    >
							    <Image 
							        style={{
										flex: 0.8, 
							            borderRadius:10, 
							            paddingVertical:4,
							            borderColor: "#a3a0a0",
							            borderBottomWidth: 0.25,
							            borderTopWidth: 0.25,
							            borderLeftWidth: 0.25,
							            borderRightWidth: 0.25,
										width:'100%',
                                        height:'100%',  
									}}   
								    // source = {require('../../../assets/111244630_3162631513774577_6144976767259763248_o.jpg')} 
							    />
							</TouchableOpacity> 
						</View>
					</View>
                    <View style={{ 
						flexDirection:"column",
						backgroundColor:'white',
						borderRadius: 4,
						height: '100%',
						width: '100%', 
						padding:2,
						flex: 0.5 
						}}
					>
						<View style={{ 
							flex: 0.5,
							paddingVertical:2,
							}}
						>
						    <TouchableOpacity
							    style={{
							    	flex: 1, 
							        borderRadius:10, 
							        paddingVertical:4,
							        borderColor: "#a3a0a0",
							        borderBottomWidth: 0.25,
							        borderTopWidth: 0.25,
							        borderLeftWidth: 0.25,
							        borderRightWidth: 0.25,
									width:'100%',
                                    height:'100%', 
							    }}
							    onPress={() => {
							    	navigation.navigate("Popup");
							    }}
						    >
							    <Image 
							        style={{
										flex: 0.8, 
							            borderRadius:10, 
							            paddingVertical:4,
							            borderColor: "#a3a0a0",
							            borderBottomWidth: 0.25,
							            borderTopWidth: 0.25,
							            borderLeftWidth: 0.25,
							            borderRightWidth: 0.25,
										width:'100%',
                                        height:'100%',  
									}}   
								    // source = {require('../../../assets/111244630_3162631513774577_6144976767259763248_o.jpg')} 
							    />
							</TouchableOpacity> 
						</View>
						<View style={{ 
							flex: 0.5, 
							paddingVertical:2,
							}}
						>
                            <TouchableOpacity
							    style={{
							    	flex: 1, 
							        borderRadius:10, 
							        paddingVertical:4,
							        borderColor: "#a3a0a0",
							        borderBottomWidth: 0.25,
							        borderTopWidth: 0.25,
							        borderLeftWidth: 0.25,
							        borderRightWidth: 0.25,
									width:'100%',
                                    height:'100%', 
							    }}
							    onPress={() => {
							    	navigation.navigate("Popup");
							    }}
						    >
							    <Image 
							        style={{
										flex: 0.8, 
							            borderRadius:10, 
							            paddingVertical:4,
							            borderColor: "#a3a0a0",
							            borderBottomWidth: 0.25,
							            borderTopWidth: 0.25,
							            borderLeftWidth: 0.25,
							            borderRightWidth: 0.25,
										width:'100%',
                                        height:'100%',  
									}}   
								    // source = {require('../../../assets/111244630_3162631513774577_6144976767259763248_o.jpg')} 
							    />
							</TouchableOpacity> 
						</View>
						<View style={{ 
							flex: 0.5 , 
							paddingVertical:2,
							}}
						>
						    <TouchableOpacity
							    style={{
							    	flex: 1, 
							        borderRadius:10, 
							        paddingVertical:4,
							        borderColor: "#a3a0a0",
							        borderBottomWidth: 0.25,
							        borderTopWidth: 0.25,
							        borderLeftWidth: 0.25,
							        borderRightWidth: 0.25,
									width:'100%',
                                    height:'100%', 
							    }}
							    onPress={() => {
							    	navigation.navigate("Popup");
							    }}
						    >
							    <Image 
							        style={{
										flex: 0.8, 
							            borderRadius:10, 
							            paddingVertical:4,
							            borderColor: "#a3a0a0",
							            borderBottomWidth: 0.25,
							            borderTopWidth: 0.25,
							            borderLeftWidth: 0.25,
							            borderRightWidth: 0.25,
										width:'100%',
                                        height:'100%',  
									}}   
								    // source = {require('../../../assets/111244630_3162631513774577_6144976767259763248_o.jpg')} 
							    />
							</TouchableOpacity> 
						</View>
					</View>
                </View>
            }
            
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    
});

export default Drawer;














