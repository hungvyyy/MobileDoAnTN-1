import React from 'react';
import { View, Text, Image ,TouchableOpacity, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'
import { InputStyle } from '../../components'
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../../contains'
import backgroundLogin from '../../assets/images/backgroup.png'

const LoginScreen = () => {
  const navigation = useNavigation()

  const changeRegister = () => {
    navigation.navigate('SignUp')
  }


    return (
      <KeyboardAwareScrollView
        style={styles.container}
        enableOnAndroid={true}
        extraScrollHeight={20}
      >
        <ImageBackground source={backgroundLogin} style={styles.backgroundImage}>
        <View style={styles.header}>
          <Image source={IMAGES.logo} style={styles.logo1} />
          </View>
        <View style={styles.body}>
        <View style={styles.form}>
              <Text style={styles.formTitle}>LOGIN</Text>
              <Text style={styles.formTitle1}>Please sign to continue!!!</Text>
              <View style={styles.formInput}>
                <InputStyle name={'Email'} />
              </View>
              <View style={styles.formInput}>
                <InputStyle name={'Password'} />
              </View>
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.boxImage}>
            </View>
            <Text onPress={changeRegister} style={styles.register}>Do not have account?
              <Text 
                style={styles.registerClick}
              > Sign Up</Text> 
            </Text>
            <View  style={styles.footerSubmit}>
              <Text style={styles.footerSubmitText}>Login</Text>
            </View>
        </View>
        </ImageBackground>
      </KeyboardAwareScrollView> 
  );
}

export default LoginScreen
