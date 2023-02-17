import React from 'react'
import { TouchableWithoutFeedback,View,Image,Text } from 'react-native'
import styles from './MealsCard.Style'

export default function ({meals,onSelect}) {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style = {styles.image_container}>
                    <Image style={styles.image} source={{uri: meals.strMealThumb}} />
                </View>
                <View style = {styles.text_container}>
                    <Text style={styles.text}>{meals.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}