import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    backgroundColor: '#000',
    borderRadius: 15,
    marginVertical: 15,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 5,
  },
  searchIcon: {
    marginHorizontal: 10,
    // color:'#000',
    // marginTop:10,
  },
  searchWrapper: {
    flex: 1,
  },
  searchInput: {
    width: '100%',
    height: '100%',
  },
});
export default styles;
