import React from 'react';
import { View,Text } from 'react-native';
import styles from './InfoBar.style';

const Bar = ({list}) => {
    
    const filterList = list.filter(element => !element.isDone)

    return(
        <View style = {styles.container}>
            <Text style = {styles.bar_text}>Yapılacaklar</Text>
            <Text style = {styles.bar_todos}>{filterList.length}</Text>
        </View>
    );
};

export default Bar;