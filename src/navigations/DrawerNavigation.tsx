import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigation';
import {DrawerParamList} from './types';
import CustomDrawerContent from '../components/CustomDrawerContent';
// import Like from '../screens/Like';
import Cart from '../screens/Cart';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      {/* <Drawer.Screen name="Like" component={Like} /> */}
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
