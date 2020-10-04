import React,{ useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const MainButton = ({buttonText, textStyle, buttonStyle, onPress})=>{
    return(
        <TouchableOpacity style={buttonStyle} onPress={onPress}>

            <Text style={textStyle}>{buttonText}</Text>

        </TouchableOpacity>
    )
}

export default MainButton;