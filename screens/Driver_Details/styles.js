import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    box : {
        paddingHorizontal : 10,
        paddingVertical : 10,
        backgroundColor : '#0EAF89',
        borderRadius : 10,
        marginBottom : 20,
    },
    list:{
        marginTop:-300,
      },
    orderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      orderDetails: {
    
      },
      orderText: {
        marginBottom: 5,
      },
      detailsButton: {
        color: 'blue',
      },
      orderDetails: {
        flex: 1,
      },
      buttonContainer: {
        marginLeft: 10,
      },
})

export default styles;