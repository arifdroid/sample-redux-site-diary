import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import MainButton from "../../../common/components/main-button/MainButton";
import TextInput_Only from "../../../common/components/text-input-only/TextInput_Only";
import { styles } from "../../../common/styles";

const Login_View = ({navigation}) => {

    const [email, setEmail] = useState(null);
    const [pwd, setPwd] = useState(null);


    const __onChangeText_email = (val) => setEmail(val)

    const __onChangeText_password = (val) => setPwd(val)

    const __pressLogin = () => {
        //api call
        navigation.navigate('Main_List_ProjectLog_view')
    }

    return (
        <View
            style={{ justifyContent: 'center', flex: 1 }}
        >
            <View style={{ width: '85%', alignSelf: 'center' }}>
                <TextInput_Only styles={{ flex: 3, marginRight: 20 }} onChangeText={__onChangeText_email} imagePass={require('../../../common/asset/phone.png')}></TextInput_Only>
                <TextInput_Only styles={{ flex: 3, marginRight: 20 }} onChangeText={__onChangeText_password} imagePass={require('../../../common/asset/password.png')}></TextInput_Only>
                <MainButton onPress={__pressLogin} buttonStyle={styles.button_login} textStyle={styles.button_text_login} buttonText={'LOGIN'}></MainButton>
                <View style={{ flexDirection: 'row', width: '75%', alignSelf: 'center' , margin:10}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={{color:'#34A3FF'}}>Create Account</Text>
                    </TouchableOpacity>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                            <Text style={{}}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </View>
    )
}
export default Login_View;