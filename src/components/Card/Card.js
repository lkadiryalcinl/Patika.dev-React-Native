import React from 'react'
import { View,Text } from 'react-native'
import styles from './Card.Style';

export default function Card({userName,userSurname,userAge,userMail,userHomeTown}){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Kullanıcı Adı: {userName}</Text>
            <Text style = {styles.text}>Kullanıcı Soyadı: {userSurname}</Text>
            <Text style = {styles.text}>Kullanıcı Yaşı: {userAge}</Text>
            <Text style = {styles.text}>Kullanıcı E-mail: {userMail}</Text>
            <Text style = {styles.text}>Kullanıcı Memleketi: {userHomeTown}</Text>
        </View>
    );
};