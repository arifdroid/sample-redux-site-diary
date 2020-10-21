import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import MainButton from "../../../common/components/main-button/MainButton";
import TextInput_Only from "../../../common/components/text-input-only/TextInput_Only";
import { URL, URL_DEV_2, url_api_key } from "@env"
import { styles } from "../../../common/styles";
import { UserData_Context } from "../../../context-provider/UserContext";
import axios from "react-native-axios/lib/axios";

const Login_View = ({ navigation }) => {

    const [phone, setPhone] = useState(null);
    const [pwd, setPwd] = useState(null);


    const __onChangeText_phone = (val) => setPhone(val)
    const __onChangeText_password = (val) => setPwd(val)
    const [refToken_context, setRefToken_context] = useContext(UserData_Context)

    const __pressLogin = async () => {
        
        try {


            let data = {
                phone: phone,
                pwd: pwd
            }


            let token = await axios.post(`${URL_DEV_2}/api/auth/sign-in?api_key=${url_api_key}`, { data });
            if (token) {
                setRefToken_context(token.data)
                navigation.navigate('Main_List_ProjectLog_view')
            }

        } catch (error) {            
            Alert.alert('error server')
        }

    }

    return (
        <View
            style={{ justifyContent: 'center', flex: 1 }}
        >
            <View style={{ width: '85%', alignSelf: 'center' }}>
                <TextInput_Only styles={{ flex: 3, marginRight: 20 }} onChangeText={__onChangeText_phone} imagePass={require('../../../common/asset/phone.png')}></TextInput_Only>
                <TextInput_Only styles={{ flex: 3, marginRight: 20 }} onChangeText={__onChangeText_password} imagePass={require('../../../common/asset/password.png')}></TextInput_Only>
                <MainButton onPress={__pressLogin} buttonStyle={styles.button_login} textStyle={styles.button_text_login} buttonText={'LOGIN'}></MainButton>
                <View style={{ flexDirection: 'row', width: '75%', alignSelf: 'center', margin: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: '#34A3FF' }}>Create Account</Text>
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