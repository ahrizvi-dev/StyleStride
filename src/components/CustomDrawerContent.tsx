import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>StyleStride</Text>
      </View>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Tabs', {screen: 'Home'})}>
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.drawerItemText}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Tabs', {screen: 'Search'})}>
        <Text style={styles.drawerItemText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Tabs', {screen: 'Like'})}>
        <Text style={styles.drawerItemText}>Liked</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Tabs', {screen: 'Profile'})}>
        <Text style={styles.drawerItemText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    // width:412,
  },
  header: {
    height: 150,
    backgroundColor: '#6c63ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});

export default CustomDrawerContent;
