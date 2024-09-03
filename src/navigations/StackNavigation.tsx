import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import {RootStackParamList} from './types';
// import {View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {DrawerActions} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Feather';
import DrawerNavigation from './DrawerNavigation';
import Cart from '../screens/Cart';
import ProductDetails from '../screens/ProductDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  // const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#000',
        headerStyle: {
          backgroundColor: '#07a624',
        },
        headerShown: false,
        // headerLeft: () => {
        //   return (
        //     <View>
        //       <Icon
        //         name="menu"
        //         size={25}
        //         color={'#fff'}
        //         onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        //       />
        //     </View>
        //   );
        // },
        // headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
      initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        options={{
          headerShown: false,
        }}
        component={Splash}
      />
      <Stack.Screen
        name="Cart"
        options={{
          headerShown: false,
        }}
        component={Cart}
      />
       <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false, title: 'Product Details' }} />
      <Stack.Screen name="Home" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
