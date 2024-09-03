import {FlatList, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../styles/Profile.style';



type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;



const profileCategoryData = [
  {
    name: 'Favorities',
    icon: 'heart',
    route: 'Like',
  },
  {
    name: 'Cart',
    icon: 'shoppingcart',
    route: 'Cart',

  },
  {
    name: 'Delete Account',
    icon: 'deleteuser',
    route: 'Cart',

  },
  {
    name: 'Logout',
    icon: 'logout',
    route: 'Cart',

  },
];

const Profile: React.FC<ProfileScreenProps> = ({navigation}) => {
   return (
    <View style={styles.container}>
      <View style={styles.backgroundImageDiv}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{
            uri: 'https://i.pinimg.com/originals/e2/50/55/e25055c549b684c7300425b92c0384e6.jpg',
          }}
        />
        <View style={styles.profileImageDiv}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://i.pinimg.com/originals/57/6f/67/576f67890e53ec505d591c146f32dd97.jpg',
            }}
          />
        </View>
      </View>
      <View>
        <View style={styles.nameGmailDiv}>
          <Text style={styles.textName}>Mhammad Ali Hamza</Text>
          <Text style={styles.textGmail}>ahrizvi.dev@gmail.com</Text>
        </View>
      </View>
      <View style={styles.profileCategoryDiv}>
        <FlatList data={profileCategoryData} renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.route)} style={styles.profileCategory}>
          <Icon
            style={styles.profileCategoryIcon}
            name={item.icon}
            size={25}
            color={'grey'}
          />
          <Text style={styles.profileCategoryText}>{item.name}</Text>
        </TouchableOpacity>
        )}/>
      </View>
    </View>
  );
};

export default Profile;
