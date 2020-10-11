import React,{ useState } from 'react';
import { SafeAreaView, TextInput, Text} from 'react-native';
import Carousel from 'react-native-snap-carousel';


const sample_data = [{ project_name: 'projek KLCC', date_log: '22/02/2020' }, { project_name: 'projek KLCC', date_log: '12/10/2020' }, { project_name: 'projek KLCC', date_log: '08/11/2020' }]

const FormProject_View = ()=>{

    const __renderItem = ({item, index})=>{
        console.log('item carousel' , item)
    }

    return(
    
    <SafeAreaView style={{flex=1}}>
        <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={sample_data}
              renderItem={__renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />

    </SafeAreaView>)
}

export default FormProject_View;