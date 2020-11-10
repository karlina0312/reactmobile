import React from 'react';
import { Stack } from './Navigations';
import NavigationHeader from '../components/Global/NavigationHeader';
import Login from '../screens/Login/Login'
import Register from '../screens/Login/Register'
import Forget from '../screens/Login/Forget'
import Welcome from '../screens/Login/Welcome'

export default () => {
    return  (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Forget" component={Forget} />
        </Stack.Navigator> 
    )
}