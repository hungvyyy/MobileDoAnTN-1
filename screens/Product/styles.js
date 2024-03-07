import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box : {
        paddingHorizontal : 10,
        paddingVertical : 10,
        backgroundColor : '#0EAF89',
        borderRadius : 10,
        marginBottom : 20,
    },
    imageContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 20,
        marginBottom: 20,
    },
    image: {
        width: 50,
        height: 50,
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    product: {
        width: '100%',
    },
    productText: {
        textAlign: 'center',
    },
})

export default styles;