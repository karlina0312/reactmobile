import React, {useContext} from 'react';
import { Stack } from '../Navigations';
import TestScreen from '../../screens/App/Test/TestScreen'
import Test from '../../screens/App/Test/Test'

export default ({ navigation}) => {

    return  (
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Test" component={TestScreen} initialParams={{ tabNavigation: navigation }} />
            <Stack.Screen 
                name="newTest" 
                component={Test} 
                options={{
                    animationEnabled: false,
                }}
            />
        </Stack.Navigator> 
    )
}

