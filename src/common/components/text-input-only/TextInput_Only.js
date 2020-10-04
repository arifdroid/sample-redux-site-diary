import React, { } from 'react';
import { View, TextInput, Image, Text } from 'react-native';
// import {  } from 'react-native-gesture-handler';


const TextInput_Only = ({ onChangeText, styles , imagePass},props) => {
    return (
        <>

            <View style={{ flexDirection: 'row', height: 50, alignSelf: 'center' }}>
                <Image source={imagePass} style={{ height: 15, alignSelf: 'center', flex: 0.5 }} resizeMode='contain'></Image>
                <TextInput style={styles} onChangeText={(val) => onChangeText(val)} />

            </View>
            <View style={{
                width: '93.5%',
                height: 1,
                borderWidth: 0.6,
                backgroundColor: 'grey',                
                opacity: 0.1,
                alignSelf:'center'
            }}></View>

        </>

    )
}

export default React.memo(TextInput_Only)