import React, {useContext} from 'react';
import { Stack } from '../Navigations';
import NavigationHeader from '../../components/Global/NavigationHeader';
import Lesson from '../../screens/App/Lesson'
import Pdf from '../../screens/App/Pdf'
import BackSvg from '../../assets/icons/backSvg';
import MenuSvg from '../../assets/icons/menuSvg';

export default ({ navigation}) => {

    return  (
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Lesson" component={Lesson} initialParams={{ tabNavigation: navigation }} />
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

