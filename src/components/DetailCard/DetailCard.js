import React from 'react'
import { View,Text,Image } from 'react-native'
import styles from './DetailCard.Style'

export default function({data}){
    return(
        <View style={styles.container}>
            <View style={styles.img_container}>
                <Image 
                style={styles.img} 
                source={{uri: data.image}}
                /></View>
                <View style={styles.sub_container}>
                    <View style={styles.body_container}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.price}>{data.price}$</Text>
                    </View>
                    <View style={styles.desc_container}><Text style={styles.desc}>{data.description}</Text></View>
                    <View style={styles.bottom_container}>
                        <Text style={styles.category}>Categories: {data.category}</Text>
                        <Text style={styles.rating}>this item {data.rating.count} times rated and rate is {data.rating.rate} / 5</Text>
                </View>
            </View>
        </View>
    );
};
