import React, { } from "react";
import { SafeAreaView, Text, View } from 'react-native';
import TextInput_Only from "../../common/components/text-input-only/TextInput_Only";

const Login_View = () => {
    
    const __onChangeText_email = (val)=>{

    }
    const __onChangeText_password = (val)=>{

    }
    
    return (
        <View
            style={{ justifyContent:'center', flex:1}}
        >
                <View style={{width:'85%', alignSelf:'center'}}>
                <TextInput_Only styles={{ flex:3, marginRight:20}} onChangeText={__onChangeText_email} imagePass={require('../../common/asset/email.png')}></TextInput_Only>
                <TextInput_Only styles={{ flex:3, marginRight:20}} onChangeText={__onChangeText_password} imagePass={require('../../common/asset/password.png')}></TextInput_Only>
                </View>
                
            
        </View>
    )
}
export default Login_View;