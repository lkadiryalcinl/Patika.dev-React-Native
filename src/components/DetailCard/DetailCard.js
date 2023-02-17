import React from 'react'
import { SafeAreaView,Text,Image,ScrollView,View ,TouchableWithoutFeedback} from 'react-native'
import styles from './DetailCard.Style'

export default function({detail,onSelect}){
    return(
    <SafeAreaView>
        <View style={styles.top_container}>
            <View style = {styles.image_container}>
                <Image style = {styles.image} source={{uri: detail.strMealThumb}}/>
            </View>
            <Text style={styles.h1_text}>{detail.strMeal}</Text>
            <Text style={styles.h2_text}>Meal area : {detail.strArea}</Text>
        </View>
        <ScrollView styles={styles.bottom_container}>
            <View style={{borderBottomWidth:1}}>
                <Text style={styles.h2_text}>Instructions</Text>
            </View>
                <Text style={styles.h3_text}>{detail.strInstructions}</Text>

            <View style= {styles.ref_button}>
                <TouchableWithoutFeedback onPress={onSelect}>
                    <Text style={styles.h4_text}>Watch on Youtube</Text>
                </TouchableWithoutFeedback>
            </View>      
        </ScrollView>

    </SafeAreaView>
    );
};