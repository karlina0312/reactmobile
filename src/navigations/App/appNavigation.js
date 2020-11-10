import React, {useContext} from 'react';
import { Tab } from '../Navigations';
import { GlobalContext } from '../../providers/ContextGlobalState'
import Home from './HomeStack'
import TestScreen from './TestStack';
import Lesson from './LessonStack';
import Material from './materialStack';
import HomeIcon from '../../assets/icons/homeSvg'
import TestIcon from '../../assets/icons/composeSvg'
import MaterialIcon from '../../assets/icons/folderSvg'
import LessonIcon from '../../assets/icons/classSvg'


export default () => {
    const {state, dispatch} = useContext(GlobalContext);

    const clearHeader = (e) => {
        if(state.user.status === 0 || !state.downloaded) e.preventDefault();
    }

    return (
        <Tab.Navigator
            backBehavior={`initialRoute`}
            initialRouteName={"Home"}
            tabBarOptions={{
                keyboardHidesTabBar: true,
                style: {
                    height: 60,
                },
                labelStyle: {
                    marginBottom: 10,
                },
            }} 
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: 'Нүүр',
                    tabBarIcon: ({ color, size, focused }) => (
                        <HomeIcon name="home" pressed={focused} color={color} size={size} style={{marginTop: 15}} />
                    )
                }}
                listeners={{
                    tabPress: clearHeader
                }}
                
            />
            <Tab.Screen 
                name="Material" 
                component={Material} 
                
                options={{
                    tabBarLabel: 'Материал',
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialIcon name="library" pressed={focused} color={color} size={size} style={{marginTop: 15}} />
                    ),
                }}
                listeners={{
                    tabPress: clearHeader
                }}
            />
            <Tab.Screen 
                name="Lesson" 
                component={Lesson}
                options={{
                    tabBarLabel: 'Хичээл',
                    tabBarIcon: ({ color, size, focused }) => (
                        <LessonIcon name="book-outline" pressed={focused} color={color} size={size} style={{marginTop: 15}} />
                    ),
                }}
                listeners={{
                    tabPress: clearHeader
                }}
            />
            <Tab.Screen 
                name="TestScreen" 
                component={TestScreen} 
                options={{
                    tabBarLabel: 'Тест',
                    tabBarIcon: ({ color, size, focused }) => (
                        <TestIcon name="ab-testing" pressed={focused} color={color} size={size} style={{marginTop: 15}} />
                    )
                }}
                listeners={{
                    tabPress: clearHeader
                }}   
            />
        </Tab.Navigator>)
}
