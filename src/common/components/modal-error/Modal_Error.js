import React, { useEffect, useState } from 'react';
import { View, TextInput, Image, Text, Button, TouchableOpacity, } from 'react-native';
import CardView from 'react-native-cardview';
import Modal from 'react-native-modal';



const Modal_Error = ({ visible, modalPass, textPass, orangeButtonPress, modalChange, modalClose, buttonText, textPassBold }) => {

    const [visibleModal, setVisibleModal] = useState(false)
    const [ModalVisible, IsModalVisible] = useState(modalPass);

    useEffect(() => {

        if (visible == true) setVisibleModal(true)
        // else

    }, [visible])

    return (

        <View style={{}}>
            <Modal animationType="fade"  transparent={true} visible={modalChange}>
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        height: 100,
                        width:  100,
                        marginLeft: -20,
                        justifyContent: 'center',
                    }}>
                    <CardView
                        style={{
                            marginLeft: 30,
                            borderRadius: 12,
                            width: '68%',
                        }}
                        cardElevation={5}
                        cardMaxElevation={5}
                        radius={15}
                        backgroundColor={'#FFFFFF'}>
                        <View>
                            <TouchableOpacity
                                style={{ borderColor: 'black' }}
                                onPress={modalClose}>
                                <View style={{ width: '92%' }}>
                                    {/* <Feather
                                        name="x"
                                        size={25}
                                        color="black"
                                        style={{ marginTop: 20, alignSelf: 'flex-end' }}
                                    /> */}
                                </View>
                            </TouchableOpacity>
                            {/* <Feather
                                name="check-circle"
                                size={60}
                                color="#FF6600"
                                style={{ alignSelf: 'center', marginBottom: 10 }}
                            /> */}
                        </View>
                        <View
                            style={{
                                width: '60%',
                                alignSelf: 'center',
                                marginBottom: '8%',
                            }}>
                            <View>
                                <Text
                                    style={{
                                        fontFamily: 'Lato-Bold',
                                        fontSize: 20,
                                        textAlign: 'center', marginBottom: 10
                                    }}>
                                    {textPassBold}
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: 'Lato-Regular',
                                        fontSize: 18,
                                        textAlign: 'center',
                                    }}>
                                    {textPass}
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            <TouchableOpacity
                                onPress={() => orangeButtonPress()}
                                style={{
                                    width: '75%',
                                    height: 50,
                                    backgroundColor: '#FF6600',
                                    borderRadius: 30,
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{
                                        fontFamily: 'Lato-Bold',
                                        color: 'white',
                                        alignSelf: 'center',
                                        fontSize: 20,
                                    }}>
                                    {buttonText}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </CardView>
                </View>
            </Modal>
        </View>




    )
}

export default React.memo(Modal_Error)