import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
// import Products from '../screens/Cart';
// import Search from '../screens/Search';
import Profile from '../screens/Profile';
import {BottomTabParamList} from './types';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Heart from 'react-native-vector-icons/EvilIcons';

import {StyleSheet} from 'react-native';
// import Cart from '../screens/Cart';
import Like from '../screens/Like';
import Search from '../screens/Search';
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'static',
          bottom: 0,
          // right: 8,
          // left: 8,
          height: 80,
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          
          backgroundColor: '#000',
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        
        options={{
          
          tabBarIcon: ({color, size}) => (
            <Icon name="search1" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          tabBarIcon: ({color}) => (
            <Heart name="heart" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          
          tabBarIcon: ({color, size}) => (
            <Icon2 name="face" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.5,
    elevation: 100,
  },
});
