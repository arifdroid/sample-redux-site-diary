import React,{useEffect, useState} from "react";
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import signUp_view from "./modules/signup/signUp_view";
import Login_View from "./modules/login/login_view";

const Stack = createStackNavigator();

const StackNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode={false}>
                
                <Stack.Screen name='Login' component={Login_View} options={{}}/>
                <Stack.Screen name='SignUp' component={signUp_view} />

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default StackNavigator;