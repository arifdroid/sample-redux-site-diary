import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardView from 'react-native-cardview';
import MainButton from '../../common/components/main-button/MainButton';
import { styles } from "../../common/styles";

const sample_data = [{ project_name: 'projek KLCC', date_log: '22/02/2020' }, { project_name: 'projek KLCC', date_log: '12/10/2020' }, { project_name: 'projek KLCC', date_log: '08/11/2020' }]

const Main_List_ProjectLog_view = ({navigation, route}) => {

    const __select =(item)=>{
        navigation.navigate('Form_1_View')
    }

    const __pressLogin =()=>{
        
        let new_form = true;
        navigation.navigate('Form_1_View',{new_form})
    }

    return (

        <SafeAreaView

            style={{ flex: 1 }}

        >
            <Text style={{ alignSelf: 'flex-end', marginRight: 30, marginBottom: 10 }}>Engineer</Text>
            <Text style={{ marginLeft: 35, marginBottom: 10 }}>Most Recent</Text>
            <FlatList
                data={sample_data}
                renderItem={({ item }) => {
                    return (
                        <CardView
                            style={{

                                paddingVertical: 4,
                                flex: 1,
                                width: '80%',
                                alignSelf: 'center',

                            }}
                            cardElevation={1}
                            cardMaxElevation={1}
                        >
                            <TouchableOpacity style={{ padding: 20, backgroundColor: 'white', shadowRadius: 20, borderRadius: 10, flex: 1 }}
                                onPress={()=>__select(item)}
                            >
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{ flex: 2 }}>Project</Text>
                                    <Text style={{ flex: 1 }}>Date Log</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{ flex: 2 }}>{item.project_name}</Text>
                                    <Text style={{ flex: 1 }}>{item.date_log}</Text>
                                </View>


                            </TouchableOpacity>

                        </CardView>
                    )
                }}

            ></FlatList>
        {/* <View style={{backgroundColor:'yellow'}}> */}
        <MainButton onPress={__pressLogin} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'+ Create New Log'}></MainButton>
        {/* </View> */}
        

        </SafeAreaView>
    )

}
export default Main_List_ProjectLog_view;