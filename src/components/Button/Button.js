import React from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import styles from './Button.Style';

export default function Button({title,onPressFunc}){
    return(
        <View>
            <TouchableOpacity style = {styles.btn} onPress = {onPressFunc} delayPressIn={0} delayPressOut={0}>
                <Text style = {styles.btn_text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};