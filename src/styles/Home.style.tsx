import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#fff',
      // paddingHorizontal: 25,
    
    },
    mt: {
      marginTop:60,
      // marginBottom:100,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
  
    topHeading: {
      width: '100%',
      // height: 200,
      marginBottom: 30,
      paddingHorizontal: 25,
      lineHeight: 0,
    },
    exploreText: {
      color: '#474745',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily:'Roboto-Thin',
    },
    flatlist: {
      marginBottom: 30,
      paddingLeft: 25,
    },
    styleText: {
      color: '#8a8987',
      fontSize: 40,
      fontWeight: '400',
      lineHeight: 40,
    },
    CardsDiv:{
      
      // flex:1,
      flexDirection:'row',
      gap:50,
      justifyContent: 'space-between',
      // gap:20
    },
    itemContainer: {
      flex: 1, // Distributes items evenly across the row
      margin: 5, // Adjust gap between items
    },
    columnWrapper: {
      justifyContent: 'space-between', // Ensures items are spaced evenly across the row
    },
    listContent: {
      paddingHorizontal: 10, // Optional: Adds padding around the list
    },
    
  });
  export default styles
  