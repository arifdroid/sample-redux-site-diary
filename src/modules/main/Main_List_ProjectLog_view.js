import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, ActivityIndicator, Alert, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardView from 'react-native-cardview';
import MainButton from '../../common/components/main-button/MainButton';
import { styles } from "../../common/styles";
import { URL, URL_DEV_2,url_api_key } from "@env"
import axios from 'react-native-axios';
import moment from "moment";
import Modal_Error from '../../common/components/modal-error/Modal_Error';
import { UserData_Context } from '../../context-provider/UserContext';

const Main_List_ProjectLog_view = ({ navigation, route }) => {

    useEffect(() => {

        _MainPageAPI();

    }, [])

    const [dataToRender, setDataToRender] = useState(null);
    const [refToken_context, setRefToken_context,currentUser, setCurrentUser] = useContext(UserData_Context)
    const [refreshing, setRefreshing] = useState(false);
    



    const _MainPageAPI = async () => {

        try {


            let config = {
                headers: {
                    'Authorization': `Bearer ${refToken_context}`
                }
            
            
            }
            
            

            let data = await axios.get(`${URL_DEV_2}/api/list-site-logs?api_key=${url_api_key}`, config)


            setDataToRender(data.data);

            return;

        } catch (error) {
            console.log('error is ->', error)
            Alert.alert('error server')

        }




    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        
          try {
            // let response = await fetch(
            //   'http://www.mocky.io/v2/5e3315753200008abe94d3d8?mocky-delay=2000ms',
            // );
            // let responseJson = await response.json();
            // console.log(responseJson);
            // setListData(responseJson.result.concat(initialData));
            // setRefreshing(false)

            await _MainPageAPI().then()
            setRefreshing(false)


          } catch (error) {
            console.error('error refresh is',error);
          }
        
      }, [refreshing]);

    const __select = (item) => {
        navigation.navigate('Form_1_View', { item })
    }

    const __pressLogin = () => {

        let new_form = true;
        navigation.navigate('Form_1_View', { new_form })
    }

    return (

        <SafeAreaView

            style={{ flex: 1 }}

        >
            {/* <Modal_Error visible={modal_error}/> */}
    <Text style={{ alignSelf: 'flex-end', marginRight: 30, marginBottom: 10, marginTop: 15 }}>Engineer {currentUser.name}</Text>
            <Text style={{ marginLeft: 35, marginBottom: 10 }}>Most Recent</Text>
            {/* <Button title='error' onPress={()=>{
                setModal_error(true)
            }}></Button> */}
            {
                dataToRender === null ?
                    <>
                        <ActivityIndicator size="small" color="#0000ff" />
                    </> :
                    <FlatList
                        data={dataToRender}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}></RefreshControl>}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <View style={{ flex: 1 }}>
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

                                    </View>
                                </>
                            )
                        }}

                    />
            }

            <View style={{}}>
                <MainButton onPress={__pressLogin} buttonStyle={styles.button_new_log} textStyle={styles.button_text_login} buttonText={'+ Create New Log'}></MainButton>
            </View>






        </SafeAreaView>
    )

}
export default Main_List_ProjectLog_view;