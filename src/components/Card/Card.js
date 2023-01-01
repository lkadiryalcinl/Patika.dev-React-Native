import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native'
import styles from './Card.styles';

const Card = (props) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.body}>
                <Text style = {styles.title}>{props.title}</Text>
                <Text style = {styles.text}>{props.text}</Text>                
            </View>
            <TouchableOpacity style = {styles.button_container} 
            onPress = {() => {Alert.alert("Test")}}>
                <Text style = {styles.button_title}>I like</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Card;
