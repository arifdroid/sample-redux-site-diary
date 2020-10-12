import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardView from 'react-native-cardview';
import MainButton from '../../common/components/main-button/MainButton';
import { styles } from "../../common/styles";
import { URL } from "@env"
import axios from 'react-native-axios';
import moment from "moment";

const Main_List_ProjectLog_view = ({ navigation, route }) => {

    useEffect(() => {

        _MainPageAPI();

    }, [])

    const [dataToRender, setDataToRender]= useState(null);

    const _MainPageAPI = async () => {

        try {

             let data = await axios.get(`${URL}/api/list-site-logs`);

            //  console.log('data is ', data)
            setDataToRender(data.data);

        } catch (error) {

        }




    }

    const __select = (item) => {
        navigation.navigate('Form_1_View')
    }

    const __pressLogin = () => {

        let new_form = true;
        navigation.navigate('Form_1_View', { new_form })
    }

    return (

        <SafeAreaView

            style={{ flex: 1 }}

        >
            <Text style={{ alignSelf: 'flex-end', marginRight: 30, marginBottom: 10 }}>Engineer</Text>
            <Text style={{ marginLeft: 35, marginBottom: 10 }}>Most Recent</Text>
            {
                dataToRender === null?
                <></>:
                <FlatList
                data={dataToRender}
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
                                onPress={() => __select(item)}
                            >
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{ flex: 2 }}>Project</Text>
                                    <Text style={{ flex: 1 }}>Date Log</Text>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{ flex: 2 }}>{item.project_name}</Text>
                                    <Text style={{ flex: 1 }}>{moment(item.createdAt).format("DD-MM-YYYY")}</Text>
                                </View>


                            </TouchableOpacity>

                        </CardView>
                    )
                }}

            />
            }
          
            
            <MainButton onPress={__pressLogin} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'+ Create New Log'}></MainButton>
            


        </SafeAreaView>
    )

}
export default Main_List_ProjectLog_view;