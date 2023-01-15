import React from 'react';
import {View, TextInput,TouchableOpacity, Text } from 'react-native';
import styles from './Input.style';

const TextInputComp = ({todo, setTodo, addTodo, activate, setActivate}) => {
    const [] = React.useState(false);

    const changeText = text => {
        setTodo(text);    
        text !== '' ? setActivate(true) : setActivate(false);
    }

    return(
        <View style = {styles.container}>
            <TextInput 
            style = {styles.text_input} 
            placeholder = 'Yapılacak...'
            placeholderTextColor={'#6B7072'}  
            onChangeText = {changeText}
            value = {todo}
            />
            <View>
                <TouchableOpacity 
                style = {!activate ? styles.btn_deactivate : styles.btn_activate}
                onPress = {addTodo}

                >
                    <Text style = {styles.btn_text}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TextInputComp;