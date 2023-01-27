import React from 'react'
import {View, Text} from 'react-native'
import styles from './WelcomePage.Style';
import Button from '../../components/Button';

export default function WelcomePage(props) {

    function onPressFunc(){
        props.navigation.navigate('Register Page');
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Kebap Fitness Salonu</Text>
            <Button title={'Kayıt Oluştur'} onPressFunc={onPressFunc}/>
        </View>
    );
};
