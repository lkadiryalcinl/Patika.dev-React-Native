import React from 'react'
import { TextInput,View,Text } from 'react-native'
import styles from './Input.Style';

export default function Input ({label,onChangeText,placeholder}){
    return(
        <View style = {styles.container}>
            <View style = {styles.label_container}>
                <Text style = {styles.label}>{label}</Text>
            </View>
            <View style = {styles.input_container}>
                <TextInput style = {styles.input} placeholder={placeholder} onChangeText={onChangeText}/>
            </View>
        </View>
    );
};