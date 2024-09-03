import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import BackIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../styles/ProductDetails.style';

type productDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

const ProductDetails: React.FC<productDetailsProps> = ({navigation, route}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(10);

  const handleLikePress = () => {
    setIsLiked(!isLiked); // Toggle like status
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.productDetailDiv}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtnDiv}>
          <BackIcon
            style={styles.backBtn}
            name="chevron-back"
            size={20}
            color={'#fff'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLikePress} style={styles.likeBtnDiv}>
          <Icon
            style={styles.likeBtn}
            name={isLiked ? 'heart' : 'hearto'}
            size={20}
            color={isLiked ? '#c77d85' : '#fff'}
          />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{uri: route.params.image}} />
      <View style={styles.detailsContainer}>
        <View style={styles.titlePriceRow}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.price}>${route.params.price}</Text>
        </View>
        <View style={styles.ratingIncreRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map(index => (
              <Icon key={index} name="star" size={25} color={'gold'} />
            ))}
          </View>
          <View style={styles.increment}>
            <TouchableOpacity onPress={() => decrement()}>
              <Icon name="minuscircleo" size={20} color={'#000'} />
            </TouchableOpacity>
            <Text style={styles.incrementNumber}>{count}</Text>
            <TouchableOpacity onPress={() => increment()}>
              <Icon name="pluscircleo" size={20} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionDiv}>
          <Text style={styles.descriptionText}>Description:</Text>
          <Text style={styles.descriptionLorem}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            quas laudantium dolorum totam, consectetur reprehenderit recusandae!
            Modi itaque tenetur ex beatae commodi in voluptatem. Placeat
            deserunt voluptatem illo culpa iure?
          </Text>
        </View>
        <View style={styles.freeDeliveryDiv}>
          <Text style={styles.brandName}>StyleStride</Text>
          <Text style={styles.freeDeliveryText}>Free Delivery</Text>
        </View>
        <View style={styles.buyCartDiv}>
          <TouchableOpacity>
            <Text style={styles.buynowText}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.cart}>
              <Icon name="shoppingcart" color={'#fff'} size={25} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
