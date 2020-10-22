import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Text, View, CheckBox } from 'react-native';
import CardView from 'react-native-cardview';

import MainButton from '../../common/components/main-button/MainButton';
import { styles } from "../../common/styles";
import FormDropdown from '../../common/components/form-dropdown/Form-Dropdown';
import TextInput_Only from '../../common/components/text-input-only/TextInput_Only';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { UserData_Context } from '../../context-provider/UserContext';

const data = ['malay', 'chinese', 'indian', 'bangladesh', 'nepal', 'vietnam', 'indonesians', 'others']


const Form_4_Materials_View = ({ navigation, route }) => {

    const [new_form_project, setNew_form_project] = useState(false);
    const [toolsNumber, setToolsNumber] = useState(1);

    const [toolsEditListener, setToolsEditListener] = useState('');
    const [toolsQuantityEditListener, setToolsQuantityEditListener] = useState('');

    const [refToken_context,setRefToken_context,currentUser, setCurrentUser,currentProjectCreate, setProjectCreate]= useContext(UserData_Context);



    const [toolsArray, setToolsArray] = useState([]);

    useEffect(() => {

        if (route.params) {
           

                console.log('current project data is', currentProjectCreate)

        } else {
            //load API

        }

    }, [])

    const __pressLogin = () => {

        navigation.navigate('Form_5_Finalized_View')

    }

    useEffect(()=>{
        if(toolsNumber){
            setToolsArray((prevState)=>{
                let arr = [...prevState];
                arr.forEach((el,i)=>{
                    if(el.toolsNumber == (toolsNumber-1)){
                        el.name = toolsEditListener.name
                        el.quantity = toolsQuantityEditListener.quantity
                    }
                })
                arr.push({name:'edit', quantity:0, toolsNumber:toolsNumber});
                return arr;

            });

            
        }
    },[toolsNumber])


    // console.log('toolsArray ==>', toolsArray)

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

                <ScrollView
                    style={{
                        flex: 1,
                        marginHorizontal: 10,
                    }}>

                    <Text style={{ fontSize: 12, marginRight: 10, alignSelf: 'flex-end' }}>
                        Date</Text>
                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Materials</Text>

                    <View style={{flexDirection:'row',marginTop: 15,  marginLeft: 10, marginBottom:10}}>
                    <Text style={{ fontSize: 16, flex:1}}>
                        Materials List</Text>
                        <Text style={{ fontSize: 16,flex:0.4 }}>
                        Quantity</Text>
                    </View>

                    


                    <FlatList
                        data={toolsArray}
                        renderItem={({ item , index}) => {
                            return (
                                <>
                                <View style={{ flexDirection: 'row', marginLeft:10,  marginBottom:3 , flex:1, marginEnd:10}}>
                                    <View style={{flex:1, backgroundColor:'#f0f4ff', height:30, justifyContent:'center'}}>
                                    <TextInput  styles={{  }}
                                    onChangeText={val=>{
                                        setToolsEditListener({name:val, toolsNumber:item.toolsNumber})
                                    }}

                                    />
                                    
                                    </View>
                                    <View style={{marginLeft:10, flex:0.4, backgroundColor:'#f0f4ff', height:30,justifyContent:'center'}}>
                                    <TextInput                                     
                                     styles={{backgroundColor:'#C3CDE6'}}
                                     onChangeText={val=>{
                                        setToolsQuantityEditListener({quantity:val, toolsNumber:item.toolsNumber})
                                    }}

                                    />
                                    
                                    </View>


                                </View>
                                
                                </>
                            )

                        }}></FlatList>



                    <TouchableOpacity onPress={() => setToolsNumber((prevState) => {
                        setToolsNumber(prevState + 1)
                    })}><Text style={{ marginTop: 10, marginLeft: 10, color: '#FF5B74' }}>+ add materials</Text></TouchableOpacity>










                </ScrollView>
            </CardView>

            <MainButton onPress={__pressLogin} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'Next'}></MainButton>

        </SafeAreaView>)
}

export default Form_4_Materials_View;