import React,{useEffect, useState} from "react";
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import signUp_view from "./modules/auth/signup/signUp_view";
import Login_View from "./modules/auth/login/login_view";
import Main_List_ProjectLog_view from "./modules/main/Main_List_ProjectLog_view";
import Form_1_View from "./modules/form-1/Form_1_View";
import Form_2_Workforce_View from "./modules/form-2-workforce/Form_2_Workforce_View";
import tac_View from "./modules/auth/tac/tac_View";
import SignUpForm_View from "./modules/auth/signup/signUpForm_View";
import Form_3_Tools_View from "./modules/form-3-tools/Form_3_Tools_View";
import Form_4_Materials_View from "./modules/form-4-materials/Form_4_Materials_View";
import Form_5_Finalized_View from "./modules/form-5-finalized/Form_5_Finalized_View";


const Stack = createStackNavigator();

const StackNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{headerBackTitleVisible:false, headerTitle:false}}
            >

                <Stack.Screen name='Login' component={Login_View} options={{}}/>
                <Stack.Screen name='SignUp' component={signUp_view} />
                <Stack.Screen name='Main_List_ProjectLog_view' component={Main_List_ProjectLog_view} />
                <Stack.Screen name='Form_1_View' component={Form_1_View} />
                <Stack.Screen name='Form_2_Workforce_ViewView' component={Form_2_Workforce_View} />
                <Stack.Screen name='tac_View' component={tac_View} />
                <Stack.Screen name='SignUpForm_View' component={SignUpForm_View} />
                <Stack.Screen name='Form_3_Tools_View' component={Form_3_Tools_View} />
                <Stack.Screen name='Form_4_Materials_View' component={Form_4_Materials_View} />
                <Stack.Screen name='Form_5_Finalized_View' component={Form_5_Finalized_View} />

            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default StackNavigator;