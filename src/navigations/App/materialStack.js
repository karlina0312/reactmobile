import React from 'react';
import { Stack } from '../Navigations';
import NavigationHeader from '../../components/Global/NavigationHeader';
import Material from '../../screens/App/Material'
import Pdf from '../../screens/App/Pdf'

export default ({navigation}) => {
    return  (
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Material" component={Material} initialParams={{ tabNavigation: navigation }}/>
            <Stack.Screen 
                name="Pdf" 
                component={Pdf} 
                options={{
                    animationEnabled: false,
                }}
            />
        </Stack.Navigator> 
    )
}

