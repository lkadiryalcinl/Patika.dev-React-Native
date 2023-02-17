import React from 'react'
import { View,Text,Image,TouchableWithoutFeedback } from 'react-native'
import styles from './CategoriesCard.Style'

export default function({categories,onSelect}) {
    return(
            <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style = {styles.image_container}>
                    <Image style={styles.image} source={{uri: categories.strCategoryThumb}}/>
                </View>
                <Text style={styles.text}>{categories.strCategory}</Text>
            </View>
            </TouchableWithoutFeedback>
    )
}