import React from 'react';
import {Stack, Drawer} from '../Navigations';
import NavigationHeader from '../../components/Global/NavigationHeader';
import Home from '../../screens/App/Home';
import MocktestScreen from '../../screens/App/Mocktest';
import Profile from '../../screens/App/Profile';
import ProfileEdit from '../../screens/App/ProfileEdit';
import Score from '../../screens/App/Score';
import About from '../../screens/App/About';
import ChangePassword from '../../screens/App/ChangePassword';
import ScoreDetail from '../../screens/App/ScoreDetail';

const ProfileStack = ({navigation, route}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{tabNavigation: route.params.tabNavigation}}
      />
      <Stack.Screen name="Mocktest" component={MocktestScreen} />
      <Stack.Screen name="Score" component={Score} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ScoreDetail" component={ScoreDetail} />
    </Stack.Navigator>
  );
};

export default ({navigation}) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Profile {...props} />}>
      <Drawer.Screen
        name="Home"
        component={ProfileStack}
        initialParams={{tabNavigation: navigation}}
      />
    </Drawer.Navigator>
  );
};
