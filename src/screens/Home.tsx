import React, {useState} from 'react';
import {View, Text, FlatList, ScrollView,} from 'react-native';
import styles from '../styles/Home.style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import Menu from '../components/Menu';
import CategoryButtons from '../components/CategoryButton';
import ProductCard from '../components/ProductCard';


type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// const {height} = Dimensions.get('window');
// ____data____
const categories = [
  {id: '1', name: 'Men'},
  {id: '2', name: 'Women'},
  {id: '3', name: 'Kids'},
  {id: '4', name: 'Accessories'},
  {id: '5', name: 'Sale'},
];

// Card DAta ----
const cardData = [
  {
    id: '1',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_b6c3435e-1099-441e-be5a-6a212e2e3fdc?wid=1000&hei=1000&qlt=80&fmt=webp',
    price: 19,
    title: 'LuxeLoom',
  },
  {
    id: '2',
    image:
      'https://i.pinimg.com/564x/9f/e2/f7/9fe2f77c50a9eae3fb09cb4c57c358b7.jpg',
    price: 189,
    title: 'UrbanEdge',
  },
  {
    id: '3',
    image:
      'https://i.pinimg.com/564x/75/f7/9f/75f79f8511de238d0a829ca36bb4f96b.jpg',
    price: 19.33,
    title: 'VelvetVibe',
  },
  {
    id: '4',
    image:
      'https://i.pinimg.com/564x/06/bc/55/06bc5521ea778a4000f2eafeea0c5848.jpg',
    price: 12.33,
    title: 'TrendThread',
  },
  {
    id: '5',
    image:
      'https://i.pinimg.com/564x/8a/76/fb/8a76fbf8f08214955d1765d51e2aa443.jpg',
    price: 14.1,
    title: 'ChicChroma',
  },
  {
    id: '6',
    image:
      'https://i.pinimg.com/564x/62/f5/92/62f59295f5c3128a126b32f69a81f23b.jpg',
    price: 11,
    title: 'StyleSavvy',
  },
  {
    id: '7',
    image:
      'https://i.pinimg.com/736x/01/fb/98/01fb989d523a0aaee31b7ec881d2b604.jpg',
    price: 9.2,
    title: 'FusionFabrics',
  },
  {
    id: '8',
    image:
      'https://i.pinimg.com/originals/fb/35/5b/fb355bb822cd1d3cd0a321a21391ad49.jpg',
    price: 92.22,
    title: 'ModernMingle',
  },
  {
    id: '9',
    image:
      'https://i.pinimg.com/originals/3b/d5/9d/3bd59d0aae56de09716738176d23e794.jpg',
    price: 45,
    title: 'CoutureCraft',
  },
  {
    id: '10',
    image:
      'https://i.pinimg.com/originals/63/33/ac/6333acd373fc776c70ed2caaeb4be6d5.jpg',
    price: 876,
    title: 'SilkStreet',
  },
];
// ____data____

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('Men');
  return (
    <View style={styles.container}>
      <Menu goToCart={() => navigation.navigate('Cart')} />
      <ScrollView style={styles.mt}>
        <View style={styles.topHeading}>
          <Text style={[styles.exploreText]}>Explore</Text>
          <Text style={styles.styleText}>Your New Style</Text>
        </View>
       
        
        <View style={styles.flatlist}>
          <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CategoryButtons
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                name={item.name}
              />
            )}
          />
        </View>
        <View style={styles.CardsDiv}>
          <FlatList
            data={cardData}
            // horizontal
            scrollEnabled={true}
            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={styles.listContent}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <ProductCard
                  price={item.price}
                  image={item.image}
                  title={item.title}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
