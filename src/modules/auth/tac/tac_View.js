import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import MainButton from "../../../common/components/main-button/MainButton";


import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;
const tac_View = ({ route, navigation }) => {

    useEffect(() => {
        const { phonePassed } = route.params;
        console.log('phone passed', phonePassed)
    }, [])

    const [phone, setPhone] = useState(null);

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    const __pressTAC = ()=>{

    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.title}>Verification</Text>
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

<MainButton onPress={__pressTAC} buttonStyle={styles.button_login} textStyle={styles.button_text_login} buttonText={'VERIFY CODE'}></MainButton>

        </SafeAreaView>
    )



}

const styles = StyleSheet.create({
    // root: { flex: 1, padding: 10 },
    title: { textAlign: 'center', fontSize: 20, marginBottom:20 },
    codeFieldRoot: { marginTop: 10, width:'85%', alignSelf: 'center', },
    button_login:{
        backgroundColor:'#FF5B74', padding: 15, marginTop:40, alignSelf:'center', width:'60%', borderRadius:70,
      },  
      button_text_login:{
        color:'white', alignSelf: 'center'
      },  
    cell: {
        width: 40,
        height: 40,
        // lineHeight: 38,
        fontSize: 20,
        borderWidth: 2,
        borderColor: 'pink',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: 'gray',
    },
});


export default tac_View;