import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Text, View, Button, } from 'react-native';
import CardView from 'react-native-cardview';
import CheckBox from 'react-native-check-box';

import MainButton from '../../common/components/main-button/MainButton';
import TextInput_Only from '../../common/components/text-input-only/TextInput_Only';
import { styles } from "../../common/styles";
import moment from "moment";
import { URL, URL_DEV_2,url_api_key } from "@env"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { UserData_Context } from '../../context-provider/UserContext';
import axios from 'react-native-axios/lib/axios';




const sample_data = [{ project_name: 'projek KLCC', date_log: '22/02/2020' }, { project_name: 'projek KLCC', date_log: '12/10/2020' }, { project_name: 'projek KLCC', date_log: '08/11/2020' }]

const Form_5_Finalized_View = ({ navigation, route }) => {

    const [new_form_project, setNew_form_project] = useState(false);
    const [projectDate, setProjectDate] = useState('');
    const [project_WorkDone, setProject_WorkDone] = useState('');
    const [project_WorkDelayed, setProject_WorkDelayed] = useState('');
    const [project_Instructions, setProject_Instructions] = useState('');
    const [project_Visitor, setProject_Visitor] = useState('');
    const [project_TestDone, setProject_TestDone] = useState('');
    const [project_SVComment, setProject_SVComment] = useState('');


    const [refToken_context, setRefToken_context, currentUser, setCurrentUser, currentProjectCreate, setProjectCreate] = useContext(UserData_Context);



    useEffect(() => {

        console.log('final page project date', currentProjectCreate)

    }, [])

    const __next = async () => {

        try {

            console.log('\n\n======\n')
            console.log('currentProjectCreate', {currentProjectCreate})
            console.log('\n======\n\n')

            let config = {
                headers: {
                    'Authorization': `Bearer ${refToken_context}`
                }
            
            
            }

            let data = {
                ...currentProjectCreate,
                work_done: project_WorkDone,
                work_delayed: project_WorkDelayed,
                instructions: project_Instructions,
                visitor: project_Visitor,
                test_done: project_TestDone,
                site_supervisor_comment: project_SVComment

            }

            console.log('data to be created is', data)

            let project_created = await axios.post(`${URL_DEV_2}/api/create-site-logs?api_key=${url_api_key}`, {data},config)

            if(project_created) navigation.navigate('Main_List_ProjectLog_view');


        } catch (error) {
            console.log('error is ', error)
        }

        // navigation.navigate('Form_2_Workforce_ViewView', { project_obj });
    }




    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <CardView
                    style={{
                        borderRadius: 10,
                        paddingVertical: 20,
                        flex: 1,
                        marginHorizontal: 30,
                        // height: 130,
                        backgroundColor: 'white',
                        marginTop: 50,
                        marginBottom: 30,
                        paddingBottom: 100
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
                            Date {projectDate ? moment(projectDate).format("DD-MM-YYYY") : null}</Text>
                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Work Done</Text>
                        <TextInput_Only valuePass={project_WorkDone} styles={{ width: '95%' }}
                            onChangeText={(val) => setProject_WorkDone(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />

                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Work Delayed</Text>
                        <TextInput_Only valuePass={project_WorkDelayed} styles={{ width: '95%' }}
                            onChangeText={(val) => setProject_WorkDelayed(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />

                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Instructions</Text>
                        <TextInput_Only valuePass={project_Instructions} styles={{ width: '95%' }}
                            onChangeText={(val) => setProject_Instructions(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />

                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Visitor</Text>
                        <TextInput_Only valuePass={project_Visitor} styles={{ width: '95%' }}
                            onChangeText={(val) => setProject_Visitor(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />

                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Test Done</Text>
                        <TextInput_Only valuePass={project_TestDone} styles={{ width: '95%' }}
                            onChangeText={(val) => setProject_TestDone(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />

                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Supervisor Comment</Text>
                        <TextInput_Only valuePass={project_SVComment} styles={{ width: '95%' }}
                            onChangeText={(val) => setProject_SVComment(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />






                    </View>
                </CardView>

                <CardView
                    style={{
                        borderRadius: 10,
                        // paddingVertical: 20,
                        flex: 1,
                        marginHorizontal: 30,
                        // height: 130,
                        backgroundColor: 'white',
                        // marginTop: 50,
                        // marginBottom: 80,
                        paddingBottom: 100
                    }}
                    cardElevation={4}
                    cardMaxElevation={4}
                    radius={10}>
                    <View
                        style={{
                            flex: 1,
                            marginHorizontal: 10,
                        }}>
                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Prepared By</Text>
                        {/* <TextInput_Only valuePass={projectContractor_Number} styles={{ width: '95%' }}
                            onChangeText={(val) => setProjectContractor_Number(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        /> */}


                    </View>
                </CardView>
            </ScrollView>

            <MainButton onPress={__next} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'Next'}></MainButton>

        </SafeAreaView>)
}

export default Form_5_Finalized_View;