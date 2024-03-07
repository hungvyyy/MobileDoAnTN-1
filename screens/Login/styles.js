import { StyleSheet , Dimensions, Platform , StatusBar } from 'react-native';

const height = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight :  Dimensions.get('screen').height
import { COLORS , FONTSIZE } from '../../contains'


const styles = StyleSheet.create({
    container : {
      flex : 1,
    },
    header : {
        height : height/8*3,
        flex: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    body : {
        height : height/8*3,
    },
    footer : {
        height : height/8*2
    },
    boxImage : {
        flex : 1,
        width : '100%',
        height : '100%',
    },
    backgroundImage: {
        flex : 1,
        width:'auto',
        height:'auto'
    },
    imgBackground : {
        width : '100%',
        height : '100%'
    },
    imgBackgroundHeader : {
        height : '140%'
    },
    form : {
        flex : 1,
        paddingTop : 60,
        paddingHorizontal : 20,
        paddingRight : 60
    },
    formTitle : {
        fontSize : FONTSIZE.h1,
        fontWeight : 'bold',
        position : 'absolute',
        left : 20,
        color : COLORS.loginAndlogout
    },
        formInput : {
        marginTop : 30,
        color : COLORS.colorsThongtin,
        fontSize : 18
    },
    textInput: {
        marginTop : 10,
        height: 40,
        borderColor: COLORS.title,
        borderWidth : 1,
        borderRadius : 10,
        paddingLeft : 10,
    },
    textInputLabel : {
        color : COLORS.title,
      },
      register : {
        color : '#5a5858',
        position : 'absolute',
        bottom : 40,
        left : 10,
        fontSize : FONTSIZE.h2,
        justifyContent : 'center',
        alignItems : 'center'
      },
      footerSubmit : {
        position : 'absolute',
        top: 10,
        right : 130,
        paddingVertical : 10,
        paddingHorizontal : 40,
        borderWidth : 1,
        borderRadius : 10,
        borderColor : COLORS.button,
        shadowColor: COLORS.white,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      footerSubmitText : {
        color : COLORS.white,
        fontSize : 24,
      },
      registerClick : {
        color : COLORS.register,
        fontSize : 20
      },
      boxIcon : {
        position : 'absolute',
        width: 147,
        height: 109,
        paddingHorizontal: 1
      },
      formTitle1: {
        fontSize : FONTSIZE.h2,
        fontWeight : 'bold',
        position : 'absolute',
        left : 20,
        bottom: 250,
      },
      logo1 : {
        width: 147,
        height:109,
        top: 120
      }
})

export default styles;