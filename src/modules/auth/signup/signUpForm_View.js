import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Text, View, CheckBox, Alert } from 'react-native';
import CardView from 'react-native-cardview';
import { URL, URL_DEV_2, url_api_key } from "@env"

import TextInput_Only from '../../../common/components/text-input-only/TextInput_Only';
import { styles } from "../../../common/styles";
import moment from "moment";
import MainButton from '../../../common/components/main-button/MainButton';
import axios from 'react-native-axios/lib/axios';
import { UserData_Context } from '../../../context-provider/UserContext';
import { ScrollView } from 'react-native-gesture-handler';



// const sample_data = [{ project_name: 'projek KLCC', date_log: '22/02/2020' }, { project_name: 'projek KLCC', date_log: '12/10/2020' }, { project_name: 'projek KLCC', date_log: '08/11/2020' }]

const SignUpForm_View = ({ navigation, route }) => {

    
    const [userName, setUserName] = useState('');
    const [position, setPosition] = useState('');    
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [refToken_context, setRefToken_context,currentUser, setCurrentUser ] = useContext(UserData_Context)    
    
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    useEffect(() => {

        if (route.params) {
            let { new_form, phonePassed } = route.params

            if(phonePassed){ //here populate

                setPhone(phonePassed);
              

            }else{ //create new




            }
        } 

    }, [])

    const _CreateApi = async() => {

        try {

            //  let data = await axios.get(`${URL}/api/list-site-logs`);

            let data = {
                name:userName,
                position:position,
                company:company,
                phone:phone,
                pwd:password
            }

            let resp =  await axios.post(`${URL}/api/auth/sign-up?api_key=${url_api_key}`,{data});            
            if (resp.data) {
                setRefToken_context(resp.data.token)
                setCurrentUser(resp.data.user)
                navigation.navigate('Main_List_ProjectLog_view')
            }

        } catch (error) {
            // console.log('error is', error)
            Alert.alert('error server')
        }




    }
    console.log('phone is', phone)


    const __next = async() => {

        // let project_obj= null;

        // if(projectName||projectContractor ||projectLocation ||projectContractor_Number){

        //      project_obj = {
        //         projectName:projectName,
        //         projectContractor: projectContractor,
        //         projectLocation:projectLocation,
        //         projectContractor_Number:projectContractor_Number
        //     };

        // }

        // console.log('press')
        
        await _CreateApi();

        // if(token) { 
        //     setRefToken_context(token.data)
        //     navigation.navigation('Main_List_ProjectLog_view')
        // }

        
        // navigation.navigate('Form_2_Workforce_ViewView',{project_obj} );
    }




    return (

        <SafeAreaView style={{ flex: 1 }}>
            
            <CardView
                style={{
                    borderRadius: 10,
                    paddingVertical: 20,
                    flex: 1,
                    marginHorizontal: 30,
                    height: 130,
                    backgroundColor: 'white',
                    marginTop: 50,
                    marginBottom: 80
                }}
                cardElevation={4}
                cardMaxElevation={4}
                radius={10}

            >
                <ScrollView style={{}}>
                <View
                    style={{
                        flex: 1,
                        marginHorizontal: 10,
                    }}>

                    
                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Name</Text>
                    <TextInput_Only valuePass={userName} styles={{ width: '95%' }}
                        onChangeText={(val)=>setUserName(val)}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Position</Text>
                    <TextInput_Only valuePass={position} styles={{ width: '95%' }}
                        onChangeText={(val)=>setPosition(val)}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Company</Text>
                    <TextInput_Only valuePass={company} styles={{ width: '95%' }}
                        onChangeText={(val)=>setCompany(val)}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Phone No</Text>
                    <TextInput_Only valuePass={phone} styles={{ width: '95%' }}
                        onChangeText={(val)=>setPhone(val)}
                        inputBackgroundStyle={{ height: 40 }}
                    />
                     <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Password</Text>
                    <TextInput_Only valuePass={password} styles={{ width: '95%' }}
                        onChangeText={(val)=>setPassword(val)}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                  



                </View>
                </ScrollView>
            </CardView>
            

            <MainButton onPress={__next} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'Next'}></MainButton>

        </SafeAreaView>)
}

export default SignUpForm_View;