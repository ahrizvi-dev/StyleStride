import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
// import Menu from '../components/Menu';
import BackIcon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Cart.style';

type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Cart'
>;

const Cart: React.FC<ProductsScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.cartHeader}>
      <TouchableOpacity   onPress={() => navigation.goBack()}
          >
          <BackIcon
            style={styles.backBtn}
            name="chevron-back"
            size={20}
            color={'#fff'}
          />
        
      </TouchableOpacity>
      <Text>CART</Text>
    </View>
    </View>
  );
};

export default Cart;

