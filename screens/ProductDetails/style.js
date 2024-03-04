import { StyleSheet } from "react-native";
import { verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  
      imageContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 200, 
        height: 200, 
        borderRadius:100
      },
      detailsContainer: {
        flex: 0.6,
        paddingHorizontal: 20,
      },
      productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      productDescription: {
        fontSize: 16,
        marginBottom: 10,
      },
      productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
      },
      button:{
        // width:'100%',
        paddingVertical:verticalScale(10),
        backgroundColor:'green',
        alignItems:'center',
        marginHorizontal:10,
        marginBottom:verticalScale(5)
      }
})

export default style