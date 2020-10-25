import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import MainButton from "../../../common/components/main-button/MainButton";
import TextInput_Only from "../../../common/components/text-input-only/TextInput_Only";
import { styles } from "../../../common/styles";
import auth, { firebase } from '@react-native-firebase/auth';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const signUp_view = ({ navigation, route }) => {

    const [phone, setPhone] = useState(null);

    const __onChangeText_phone = (val) => setPhone(val);
    const [confirm, setConfirm] = useState(null);


    // code input view

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    const __getTAC = async () => {
        try {

            const confirmation = await auth().signInWithPhoneNumber(phone);
            console.log('confirmation code is', confirmation)
            setConfirm(confirmation);


        } catch (error) {
            console.log('confirmation code error is', error)
        }

    };

    const __confirmTAC = async () => {
        try {

            let user_loggedin = await firebase.auth().currentUser;
            let phonePassed = phone;
            console.log('user_login is', user_loggedin)

            if (!user_loggedin) {
                let check = await confirm.confirm(value);
                if(check) navigation.navigate('SignUpForm_View', { phonePassed })
            }else{
                navigation.navigate('SignUpForm_View', { phonePassed })
            }



            

            
            // if (check || user_loggedin) navigation.navigate('SignUpForm_View', { phonePassed })
            // console.log('confirmation code TAC success is',)

        } catch (error) {
            console.log('confirmation code TAC error is', error)
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>

            <View style={{ width: '85%', alignSelf: 'center' }}>
                <TextInput_Only styles={{ flex: 3, marginRight: 20 }} onChangeText={__onChangeText_phone} imagePass={require('../../../common/asset/phone.png')}></TextInput_Only>

                {confirm == null ?
                    <>

                        <Text style={{ color: 'gray', alignSelf: 'center', marginTop: 20 }}>Please enter your phone number and insert TAC</Text>
                        <MainButton onPress={__getTAC} buttonStyle={styles.button_login} textStyle={styles.button_text_login} buttonText={'GET CODE'}></MainButton>
                    </> :
                    <>

                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={6}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />

                        <Text style={{ color: 'gray', alignSelf: 'center', marginTop: 20 }}>Please enter your 6 digit phone number and confirm</Text>
                        <MainButton onPress={__confirmTAC} buttonStyle={styles.button_login} textStyle={styles.button_text_login} buttonText={'CONFIRM CODE'}></MainButton>
                    </>
                }



            </View>

        </SafeAreaView>
    )
}
export default signUp_view;