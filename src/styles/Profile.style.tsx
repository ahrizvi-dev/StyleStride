import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {},
    backgroundImageDiv: {
      width: '100%',
      height: 250,
      // backgroundColor:'#000',
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    profileImageDiv: {
      width: 150,
      height: 150,
      // marginTop:20,
      borderRadius: 80,
      position: 'absolute',
      bottom: -60,
      left: '33%',
   backgroundColor: '#F58820',
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: 80,
    },
    nameGmailDiv: {
      marginTop: 60,
      // height:30,
      // backgroundColor:'#F58820',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textName: {
      color: '#000',
    },
    textGmail: {
      color: '#000',
      paddingHorizontal: 20,
      paddingVertical: 3,
      borderRadius: 20,
      backgroundColor: '#28e1eb',
    },
    profileCategoryDiv: {
      // backgroundColor: '#F58820',
      width: '100%',
      marginTop: 40,
      height: '100%',
    },
    profileCategory: {
      width: '100%',
      height: 50,
      borderBottomWidth: 1,
      borderBlockColor: '#000',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      paddingHorizontal: 30,
      // paddingVertical:20,
    },
    profileCategoryIcon: {},
    profileCategoryText: {
      color: '#000',
      fontSize:20,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
  });
export default styles;
