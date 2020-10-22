import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Text, View, CheckBox, Alert } from 'react-native';
import CardView from 'react-native-cardview';

import MainButton from '../../common/components/main-button/MainButton';
import { styles } from "../../common/styles";
import FormDropdown from '../../common/components/form-dropdown/Form-Dropdown';
import TextInput_Only from '../../common/components/text-input-only/TextInput_Only';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { UserData_Context } from '../../context-provider/UserContext';

const data = ['malay', 'chinese', 'indian', 'bangladesh', 'nepal', 'vietnam', 'indonesians', 'others']


const Form_2_Workforce_Latest_View = ({ navigation, route }) => {

    const [new_form_project, setNew_form_project] = useState(false);
    const [toolsNumber, setToolsNumber] = useState(1);

    const [toolsEditListener, setToolsEditListener] = useState('');
    const [toolsQuantityEditListener, setToolsQuantityEditListener] = useState('');

    const [refToken_context,setRefToken_context,currentUser, setCurrentUser,currentProjectCreate, setProjectCreate]= useContext(UserData_Context);

    const [toolsArray, setToolsArray] = useState([]);

    const [navNext, setNavNext] = useState(false);
    const [pressNext, setPressNext] = useState(false);

    // const[project_obj, setProject_obj]

    useEffect(() => {

        if (route.params) {
            const { project_obj } = route.params

            console.log('project_obj ->', project_obj)


        } else {
            //load API

        }

    }, [])


    const __pressLogin = () => {

        if (toolsEditListener != '') {

                setToolsNumber((prevState) => { setToolsNumber(prevState + 1) });
                setPressNext(true);
         

        } else {
            Alert.alert('please insert values')
        }

    }



    useEffect(()=>{

        if(toolsArray && pressNext){
            setNavNext(true)
        }

    },[toolsArray])

    useEffect(() => {
        if (toolsNumber) {
            setToolsArray((prevState) => {
                let arr = [...prevState];
                arr.forEach((el, i) => {
                    if (el.toolsNumber == (toolsNumber - 1)) {
                        el.name = toolsEditListener.name
                        el.quantity = toolsQuantityEditListener.quantity
                    }
                })
                arr.push({ name: 'edit', quantity: 0, toolsNumber: toolsNumber });
                return arr;

            });


        }
    }, [toolsNumber])


    useEffect(() => {

        if (navNext) {


            __cleanUpData();

        }

    }, [navNext])

    const __cleanUpData=()=>{

        let filter_edit = toolsArray.filter(el=>el.name!='edit')
       
        
        let filter_duplicate = [];

        let filter_edit_length = filter_edit.length;

        if(filter_edit_length>1){
            
            if(filter_edit[filter_edit_length-1].name == filter_edit[filter_edit_length-2].name){
                filter_edit.pop();
                filter_duplicate = filter_edit;
            }else{
                filter_duplicate = filter_edit
            }
        }else{
            filter_duplicate = filter_edit
        }


        let workforces = filter_duplicate.map(el=>{
            return{
                sub_con_name:'sub con name',
                        ethnicity:el.name,
                        number:el.quantity
            }
        })

        
        let project_object = {currentProjectCreate,workforces} 
        setProjectCreate(project_object)
        navigation.navigate('Form_3_Tools_View',{ })
       
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

                <ScrollView
                    style={{
                        flex: 1,
                        marginHorizontal: 10,
                    }}>

                    <Text style={{ fontSize: 12, marginRight: 10, alignSelf: 'flex-end' }}>
                        Date</Text>
                    <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                        Workforces</Text>

                    <Text style={{ marginTop: 15, fontSize: 16, marginLeft: 10 }}>
                        Subcon Name</Text>

                    <TextInput_Only valuePass={'contractor name'} styles={{ width: '95%' }}
                        inputBackgroundStyle={{ height: 40 }}
                    />

                    <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 16, flex: 1 }}>
                            Workforces List</Text>
                        <Text style={{ fontSize: 16, flex: 0.4 }}>
                            Quantity</Text>
                    </View>




                    <FlatList
                        data={toolsArray}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 3, flex: 1, marginEnd: 10 }}>
                                        <View style={{ flex: 1, backgroundColor: '#f0f4ff', height: 30, justifyContent: 'center' }}>
                                            <TextInput styles={{}}
                                                onChangeText={val => {
                                                    setToolsEditListener({ name: val, toolsNumber: item.toolsNumber })
                                                }}

                                            />

                                        </View>
                                        <View style={{ marginLeft: 10, flex: 0.4, backgroundColor: '#f0f4ff', height: 30, justifyContent: 'center' }}>
                                            <TextInput
                                                styles={{ backgroundColor: '#C3CDE6' }}
                                                onChangeText={val => {
                                                    setToolsQuantityEditListener({ quantity: val, toolsNumber: item.toolsNumber })
                                                }}

                                            />

                                        </View>


                                    </View>

                                </>
                            )

                        }}></FlatList>



                    <TouchableOpacity onPress={() => setToolsNumber((prevState) => {
                        setToolsNumber(prevState + 1)
                    })}><Text style={{ marginTop: 10, marginLeft: 10, color: '#FF5B74' }}>+ add workforces</Text></TouchableOpacity>










                </ScrollView>
            </CardView>

            <MainButton onPress={__pressLogin} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'Next'}></MainButton>

        </SafeAreaView>)
}

export default Form_2_Workforce_Latest_View;