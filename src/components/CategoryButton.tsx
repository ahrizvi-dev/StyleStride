import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface btnProps {
  name: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryButton: React.FC<btnProps> = ({
  name,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    // <View style={styles.btnDiv}>
    <TouchableOpacity
      onPress={() => setSelectedCategory(name)}
      style={styles.cateBtn}>
      <Text
        style={[
          styles.btnText,
          selectedCategory === name && {
            color: '#fff',
            backgroundColor: '#000',
          },
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
    // </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  cateBtn: {
    borderBlockColor: '#000',
    borderWidth: 0.1,
    marginRight: 10,
    // paddingHorizontal:25,
    // paddingVertical:10,
    borderRadius: 5,
  },
  btnText: {
    color: '#000',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 15,
  },
});
