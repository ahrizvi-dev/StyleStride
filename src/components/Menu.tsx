import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/AntDesign';

interface IProps {
  goToCart: () => void;
}

const Menu: React.FC<IProps> = ({goToCart}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.header}>
        <Icon
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={styles.menuIcon}
          name="menu"
          size={30}
        />

        <View style={styles.iconDiv}>
          <Icon2
            onPress={goToCart}
            name="shoppingcart"
            color={'#000'}
            size={25}
          />
        </View>
      </View>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    flexDirection: 'row',
    // gap: 110,
    paddingHorizontal: 25,
    marginBottom: 10,
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    top: 0,
    zIndex: 999,
    
  },

  menuIcon: {
    // zIndex: 100,
    color: '#000',
  },
  headerText: {
    paddingRight: 100,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  iconDiv: {
    flexDirection: 'row',
    gap: 20,
  },
});
