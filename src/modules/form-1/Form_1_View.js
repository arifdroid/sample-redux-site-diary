import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Text, View, Button, } from 'react-native';
import CardView from 'react-native-cardview';
import CheckBox from 'react-native-check-box';

import MainButton from '../../common/components/main-button/MainButton';
import TextInput_Only from '../../common/components/text-input-only/TextInput_Only';
import { styles } from "../../common/styles";
import moment from "moment";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";




const sample_data = [{ project_name: 'projek KLCC', date_log: '22/02/2020' }, { project_name: 'projek KLCC', date_log: '12/10/2020' }, { project_name: 'projek KLCC', date_log: '08/11/2020' }]

const Form_1_View = ({ navigation, route }) => {

    const [new_form_project, setNew_form_project] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projectDate, setProjectDate] = useState('');
    const [projectLocation, setProjectLocation] = useState('');
    const [projectContractor, setProjectContractor] = useState('');
    const [projectContractor_Number, setProjectContractor_Number] = useState('');



    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [toggleCheckBox_rainy, setToggleCheckBox_rainy] = useState(false)


    //time picker

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isStopTimePickerVisible, setStopTimePickerVisibility] = useState(false);

    const[startTime, setStartTime]=useState(null)
    const[stopTime, setStopTime]=useState(null)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };

      const showStopTimePicker = () => {
        setStopTimePickerVisibility(true);
      };  
     
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
      const hideStopTimePicker = () => {
        setStopTimePickerVisibility(false);
      };
     
      const handleConfirm = (date) => {
        // console.log("A date has been picked: ", date.toString().substring(16,21));
        setStartTime(date.toString().substring(16,21))
        hideDatePicker();
      };

      const handleStopTimeConfirm = (date) => {
        // console.log("A date has been picked: ", date.toString().substring(16,21));
        setStopTime(date.toString().substring(16,21))
        hideStopTimePicker();
      };

    useEffect(() => {

        if (route.params) {
            let { new_form, item } = route.params

            if (item) { //here populate

                console.log('item picked', item)
                setProjectName(item.project_name);
                setProjectLocation(item.location);
                setProjectContractor(item.contractor);
                setProjectContractor_Number(item.contractor_no);
                setProjectDate(item.updatedAt)


            } else { //create new




            }
        }

    }, [])

    const _CreateApi = async () => {

        try {

            let data = await axios.get(`${URL}/api/list-site-logs`);

            //  console.log('data is ', data)


        } catch (error) {

        }




    }

    // useEffect(()=>{

    //     let project_obj = {
    //         projectName:projectName,
    //         projectContractor: projectContractor,
    //         projectLocation:projectLocation,
    //         projectContractor_Number:projectContractor_Number
    //     };



    // }, [projectName, projectContractor, projectLocation, projectContractor_Number])

    const __next = () => {

        let project_obj = null;

        if (projectName || projectContractor || projectLocation || projectContractor_Number) {

            project_obj = {
                projectName: projectName,
                projectContractor: projectContractor,
                projectLocation: projectLocation,
                projectContractor_Number: projectContractor_Number
            };

        }



        navigation.navigate('Form_2_Workforce_ViewView', { project_obj });
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
                        marginBottom: 80,
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
                            Project Name</Text>
                        <TextInput_Only valuePass={projectName} styles={{ width: '95%' }}
                            onChangeText={(val) => setProjectName(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />

                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Location</Text>
                        <TextInput_Only valuePass={projectLocation} styles={{ width: '95%' }}
                            onChangeText={(val) => setProjectLocation(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />

                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Contractor</Text>
                        <TextInput_Only valuePass={projectContractor} styles={{ width: '95%' }}
                            onChangeText={(val) => setProjectContractor(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />

                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Contractor No</Text>
                        <TextInput_Only valuePass={projectContractor_Number} styles={{ width: '95%' }}
                            onChangeText={(val) => setProjectContractor_Number(val)}
                            inputBackgroundStyle={{ height: 40 }}
                        />

                        <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 10 }}>
                            Current Weather</Text>


                        <CheckBox
                            style={{ width: 130, marginLeft: 10, marginTop: 5 }}
                            onClick={() => {
                                setToggleCheckBox_rainy(!toggleCheckBox_rainy)
                            }}
                            uncheckedCheckBoxColor={'gray'}
                            checkedCheckBoxColor={'red'}
                            isChecked={toggleCheckBox_rainy}
                            leftText={"Rainy Day"}
                        />

                        {toggleCheckBox_rainy == true ?
                            <>
                                <Text style={{ marginTop: 20, fontSize: 16, marginLeft: 10 }}>
                                    Raining Period</Text>
                                <View>
                                    {/* <Button title="Pick Time" onPress={showDatePicker} /> */}
                                    <TouchableOpacity onPress={showDatePicker}>
                                    <Text style={{ marginTop: 10, fontSize: 14, marginLeft: 10, color:'gray' }}>
                                    Start time : {startTime}</Text>
                                    </TouchableOpacity>
                                    <DateTimePickerModal
                                        mode='time'
                                        locale="en_GB"
                                        headerTextIOS="Pick a time"
                                        isVisible={isDatePickerVisible}                                        
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}
                                    />
                                </View>

                                <View>
                                    {/* <Button title="Pick Time" onPress={showDatePicker} /> */}
                                    <TouchableOpacity onPress={showStopTimePicker}>
                                    <Text style={{ marginTop: 10, fontSize: 14, marginLeft: 10, color:'gray' }}>
                                    Stop time : {stopTime}</Text>
                                    </TouchableOpacity>
                                    <DateTimePickerModal
                                        mode='time'
                                        locale="en_GB"
                                        headerTextIOS="Pick a time"
                                        isVisible={isStopTimePickerVisible}                                        
                                        onConfirm={handleStopTimeConfirm}
                                        onCancel={hideStopTimePicker}
                                    />
                                </View>


                            </> :
                            <>
                            </>
                        }





                    </View>
                </CardView>
            </ScrollView>

            <MainButton onPress={__next} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'Next'}></MainButton>

        </SafeAreaView>)
}

export default Form_1_View;