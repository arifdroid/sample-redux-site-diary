import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Text, View, CheckBox } from 'react-native';
import CardView from 'react-native-cardview';

import MainButton from '../../common/components/main-button/MainButton';
import TextInput_Only from '../../common/components/text-input-only/TextInput_Only';
import { styles } from "../../common/styles";


const sample_data = [{ project_name: 'projek KLCC', date_log: '22/02/2020' }, { project_name: 'projek KLCC', date_log: '12/10/2020' }, { project_name: 'projek KLCC', date_log: '08/11/2020' }]

const Form_1_View = ({ navigation, route }) => {

    const [new_form_project, setNew_form_project] = useState(false);
    // const [weather, setWeather] = useState(null)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
                        Project Name</Text>
                    <TextInput_Only valuePass={'cehck'} styles={{ width: '95%' }}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Location</Text>
                    <TextInput_Only valuePass={'kuala lumpur'} styles={{ width: '95%' }}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Contractor</Text>
                    <TextInput_Only valuePass={'contractor '} styles={{ width: '95%' }}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Contractor No</Text>
                    <TextInput_Only valuePass={'contractor '} styles={{ width: '95%' }}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                  



                </View>
            </CardView>

            <MainButton onPress={__pressLogin} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'Next'}></MainButton>

        </SafeAreaView>)
}

export default Form_1_View;