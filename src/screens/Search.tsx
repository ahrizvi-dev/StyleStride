import {SafeAreaView, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';
import styles from '../styles/Search.style';
import Icon from 'react-native-vector-icons/AntDesign';

type SeacrhScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const Search: React.FC<SeacrhScreenProps> = () => {
  return (
    <SafeAreaView>
         <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Icon
          style={styles.searchIcon}
          name="search1"
          size={22}
          color={'#fff'}
        />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value=""
          placeholder="What are you Looking for"
        />
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Search;
