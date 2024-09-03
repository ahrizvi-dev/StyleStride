import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    productDetailDiv: {
      position: 'absolute',
      zIndex: 999,
      marginHorizontal: 20,
      top: 15,
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems:'center',
    },
    backBtnDiv: {
      // flex:1,
      // justifyContent:'center',
      // alignItems:'center',
    },
    backBtn: {
      padding: 5,
      borderRadius: 50,
      backgroundColor: '#000',
    },
    likeBtnDiv: {
      // flex:1,
      // justifyContent:'center',
      // alignItems:'center',
    },
    likeBtn: {
      padding: 5,
      borderRadius: 50,
      backgroundColor: '#000',
    },
    detailsContainer: {
      marginTop: -15,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      width: '100%',
      height: '100%',
      padding: 20,
    },
    titlePriceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    title: {
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
    },
    price: {
      color: '#55cf75',
      fontSize: 17,
    },
    ratingIncreRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    rating: {
      flexDirection: 'row',
    },
    increment: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    incrementNumber: {
      fontSize: 15,
      color: '#000',
    },
    descriptionDiv:{
      marginTop:10,
    },
    descriptionText:{
      color:'#000',
      fontSize:20,
      fontWeight:'bold',
    },
    descriptionLorem:{
      color:'#000',
      fontSize:13,
      fontWeight:'condensed',
    },
    freeDeliveryDiv:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:15,
        backgroundColor:'#64cee8',
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:20,
    },
    brandName:{
        color:'#000',
    },
    freeDeliveryText:{
        color: '#000',
    },
    buyCartDiv:{
        marginTop:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    buynowText:{
        backgroundColor:'#000',
        paddingRight:150,
        paddingVertical:12,
        paddingLeft:20,
        borderRadius:20,
        fontSize:15,
        color:'#fff',
        fontWeight:"bold"
    },
    cart:{
        backgroundColor:'#000',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:20,
    },
    image: {
      // width:'100%',
      // flex:1,
      aspectRatio: 1,
      resizeMode: 'cover',
    },
  });
 export default styles;
