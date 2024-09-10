import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';

interface cardProps {
  image: string;
  title: string;
  price: number;
}
type ProductDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

const ProductCard: React.FC<cardProps> = ({image, title, price}) => {
  const navigation = useNavigation<ProductDetailsNavigationProp>();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate('ProductDetails', {image, title, price})
      }
      style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{uri: image}}
        resizeMode="cover" // Ensures the image maintains its aspect ratio and fills the container
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity>
            <Icon2 name="shoppingcart" color={'#000'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    // shadowColor: '#000',
    borderRadius: 20,
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowOpacity: 0,
    // shadowRadius: 0,
    // elevation: 5,
    backgroundColor:'#F58820',
  },
  image: {
    // height:'100%',
    aspectRatio: 0.9,
    borderRadius: 20,

  },
  textContainer: {
    // paddingHorizontal: 15,
    // paddingVertical: 20,
  },
  text: {
    color: '#000',
    fontSize: 12,
  },
  price: {
    color: '#18803e',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  priceContainer: {
    flex: 1,
    marginBottom: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
