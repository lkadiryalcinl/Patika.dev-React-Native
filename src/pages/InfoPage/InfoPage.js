import React from 'react'
import { View,Text } from 'react-native'
import styles from './InfoPage.Style';
import Card from '../../components/Card';

export default function InfoPage({route}){
    const {user} = route.params;

    return(
        <View style = {styles.container}>
            <Card 
            userName={user.userName} 
            userSurname = {user.userSurname}
            userAge = {user.userAge}
            userMail = {user.userMail}
            userHomeTown = {user.userHomeTown}
            />
        </View>
    );
};