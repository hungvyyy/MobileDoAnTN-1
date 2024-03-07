import React from 'react'
import { View , Text , Image, ImageBackground, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'
import { IMAGES } from '../../contains'
import { InputStyle } from '../../components'
import { useNavigation } from '@react-navigation/native';
import backgroundSignUp from '../../assets/images/backgroup.png'


const SignUpScreen = () => {
    const navigation = useNavigation()

    const goLogin = () => {
        navigation.goBack()
    }

    return (
      <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
    >
      <ImageBackground source={backgroundSignUp} style={styles.backgroundImage}></ImageBackground>
      <View style={styles.header}>
          <View style={styles.boxIcon}>
            <Image source={IMAGES.iconLogin} />
          </View>
        </View>
      <TouchableOpacity style={styles.body}>
      <TouchableOpacity style={styles.form}>
            <Text style={styles.formTitle}>CREATE ACCOUNT</Text>
            <View style={styles.formInput}>
              <InputStyle name={'Full Name'} />
            </View>
            <View style={styles.formInput}>
              <InputStyle name={'Email'} />
            </View>
            <View style={styles.formInput}>
              <InputStyle name={'Password'} />
            </View>
            <View style={styles.formInput}>
              <InputStyle name={'ConfirmPassword'} />
            </View>
            <View style={styles.formInput}>
              <InputStyle name={'Phone Number'} />
            </View>
          </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.footer}>
          <Text  onPress={goLogin} style={styles.register}>Go Back ! 
            <Text 
              style={styles.registerClick}
            > Login</Text> 
          </Text>
          <View style={styles.footerSubmit}>
            <Text style={styles.footerSubmitText}>Sign Up</Text>
          </View>
      </View>
    </KeyboardAwareScrollView> 
)
}

export default SignUpScreen
