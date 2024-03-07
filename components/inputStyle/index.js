import React , { useState } from 'react'
import { TextInput, Text , View } from 'react-native'
import  IconStyle  from '../../components/icon'

import styles from './styles'

const InputStyle = ({name,style,editable = true}) => {
    const [showPass, setShowPass]  = useState(true)

    let obj = { 
        name            : name,  
        placeholder     : `${name}...`, 
        autoCapitalize  : 'none', 
        style           : {...style},
        editable        : editable,
        secureTextEntry : showPass,
        icon            : <></>
    }

    switch (name) {
        case 'ConfirmPassword' :
        case 'Password':
            obj.icon = <IconStyle name={showPass ? 'eye-slash' : 'eye'}  onPress={() =>setShowPass(!showPass)}/>
            break;
        default:
            break;
    }

    return (
        <>
            <Text style={styles.textInputLabel}>{obj.name}</Text>
            <TextInput 
                placeholder={obj.placeholder}
                autoCapitalize={obj.autoCapitalize} 
                style={[styles.textInput,obj.style]}
                editable={obj.editable}
                secureTextEntry={obj.secureTextEntry}
            />
            <View style={styles.iconShowPass}>{obj.icon}</View>
        </>
    )
}

export default InputStyle
