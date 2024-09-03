import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {Image} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Heart from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/types';

interface cardProps {
  image: string;
  title: string;
  price: number;
}
type ProductDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>;

const ProductCard: React.FC<cardProps> = ({image, title, price}) => {
  const navigation = useNavigation<ProductDetailsNavigationProp>();
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked); // Toggle like status
  };
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ProductDetails',{image, title, price})} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: image}}
          resizeMode="cover" // Ensures the image maintains its aspect ratio and fills the container
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity>
            <Icon2 name="shoppingcart" color={'#000'} size={20} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity onPress={handleLikePress}  style={styles.likeBtn}>
      <Heart
          name={isLiked ? 'heart' : 'hearto'}
          size={15}
          color={isLiked ? '#c77d85' : 'grey'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    borderRadius: 20,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 5,
    // alignItems: 'center', // Centers content horizontally
    // margin: 5, // Adds space between cards
  },
  imageContainer: {
    width: '100%', // Ensures the container takes up the full width available
    height: 300, // Sets a fixed height for the image container
    borderRadius: 20,
    overflow: 'hidden', // Ensures the image doesn’t overflow the container’s borders
  },
  image: {
    width: '100%', // Fills the container width
    height: '100%', // Fills the container height
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical:20, // Adds space between the image and text
  },
  text: {
    color: '#000',
    fontSize: 12,
    // textAlign: 'center',
  },
  price: {
    color: '#18803e',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  priceContainer: {
    flex: 1,
    marginBottom:3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeBtn: {
    width:30,
    height:30,
    backgroundColor:'#000',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:10,
    right:10,
    borderRadius:50,
  },
});
