import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Text, View, CheckBox } from 'react-native';
import CardView from 'react-native-cardview';

import MainButton from '../../common/components/main-button/MainButton';
import { styles } from "../../common/styles";
import FormDropdown from '../../common/components/form-dropdown/Form-Dropdown';
import TextInput_Only from '../../common/components/text-input-only/TextInput_Only';

const data = ['malay', 'chinese', 'indian', 'bangladesh', 'nepal', 'vietnam', 'indonesians', 'others']


const Form_2_Workforce_View = ({ navigation, route }) => {

    const [new_form_project, setNew_form_project] = useState(false);
    const [dropDown_1, setDropDown_1] = useState('')
    const [quantityDropDown_1, setQuantityDropDown_1] = useState('')
    const [dropDown_2, setDropDown_2] = useState('')
    const [quantityDropDown_2, setQuantityDropDown_2] = useState('')
    const [dropDown_3, setDropDown_3] = useState('')
    const [quantityDropDown_3, setQuantityDropDown_3] = useState('')

    useEffect(() => {

        if (route.params) {
            let { new_form } = route.params



        } else {
            //load API

        }

    }, [])

    const __pressLogin = () => {


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

                    <Text style={{ fontSize: 12, marginRight: 10, alignSelf: 'flex-end' }}>
                        Date</Text>
                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Workforce</Text>

                    <Text style={{ marginTop: 15, fontSize: 16, marginLeft: 10 }}>
                        Subcon Name</Text>

                    <TextInput_Only valuePass={'contractor name'} styles={{ width: '95%' }}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                    <Text style={{ marginTop: 15, fontSize: 16, marginLeft: 10 }}>
                        Workforce Ethnicity</Text>
                    <FormDropdown
                        optionsPass={data}
                        selectedValue={val => setDropDown_1(data[val])} 
                        thisQuantity={val=> setQuantityDropDown_1(val)}/>
                    <FormDropdown
                        optionsPass={data}
                        selectedValue={val => setDropDown_2(data[val])} 
                        thisQuantity={val=> setQuantityDropDown_2(val)}/>
                    <FormDropdown
                        optionsPass={data}
                        selectedValue={val => setDropDown_3(data[val])}
                        thisQuantity={val=> setQuantityDropDown_3(val)} />








                </View>
            </CardView>

            <MainButton onPress={__pressLogin} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'Next'}></MainButton>

        </SafeAreaView>)
}

export default Form_2_Workforce_View;