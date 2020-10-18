import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Text, View, CheckBox } from 'react-native';
import CardView from 'react-native-cardview';


import TextInput_Only from '../../../common/components/text-input-only/TextInput_Only';
import { styles } from "../../../common/styles";
import moment from "moment";
import MainButton from '../../../common/components/main-button/MainButton';



// const sample_data = [{ project_name: 'projek KLCC', date_log: '22/02/2020' }, { project_name: 'projek KLCC', date_log: '12/10/2020' }, { project_name: 'projek KLCC', date_log: '08/11/2020' }]

const SignUpForm_View = ({ navigation, route }) => {

    
    const [userName, setUserName] = useState('');
    const [position, setPosition] = useState('');    
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    
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

    const _CreateApi = async () => {

        try {

             let data = await axios.get(`${URL}/api/list-site-logs`);

            //  console.log('data is ', data)
            

        } catch (error) {

        }




    }


    const __next = () => {

        // let project_obj= null;

        // if(projectName||projectContractor ||projectLocation ||projectContractor_Number){

        //      project_obj = {
        //         projectName:projectName,
        //         projectContractor: projectContractor,
        //         projectLocation:projectLocation,
        //         projectContractor_Number:projectContractor_Number
        //     };

        // }
        

        
        navigation.navigate('Form_2_Workforce_ViewView',{project_obj} );
    }




    return (

        <SafeAreaView style={{ flex: 1 }}>
            <CardView
                style={{
                    borderRadius: 10,
                    paddingVertical: 20,
                    flex: 1,
                    marginHorizontal: 30,
                    // height: 130,
                    backgroundColor: 'white',
                    marginTop: 50,
                    marginBottom: 80
                }}
                cardElevation={4}
                cardMaxElevation={4}
                radius={10}

            >
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
            </CardView>

            <MainButton onPress={__next} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'Next'}></MainButton>

        </SafeAreaView>)
}

export default SignUpForm_View;