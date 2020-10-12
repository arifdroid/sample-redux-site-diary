import React, { useRef } from 'react';
import { View, TouchableOpacity} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown-with-flatlist';
import TextInput_Only from '../text-input-only/TextInput_Only';
import { styles } from "../../../common/styles";

const Form_Dropdown = ({optionsPass, selectedValue, thisQuantity}) => {
    const ref_modalDropDown = useRef(null);
    return (

        <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity style={styles.container} onPress={() => ref_modalDropDown.current.show()} >
                <ModalDropdown
                    ref={ref_modalDropDown}
                    textStyle={styles.textStyles}
                    dropdownStyle={styles.dropdownBox}
                    dropdownTextStyle={styles.textStyles}
                    dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                    options={optionsPass}
                    onSelect={value => selectedValue(value)}
                />
            </TouchableOpacity>
            <View style={{ marginLeft: 20, justifyContent:'center' }}>
                <TextInput_Only valuePass={'3'}
                    onChangeText={(val)=>thisQuantity(val)}
                    styles={{ width: 30, color: 'gray', alignItems: 'center', }}
                    inputBackgroundStyle={{ height: 35 }}
                />
            </View>

        </View>
    )
}

export default React.memo(Form_Dropdown);