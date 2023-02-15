import React from 'react'
import { View,Text,TouchableOpacity,Image,TouchableWithoutFeedback} from 'react-native'
import styles from './ProductCard.Style'

export default function({product,onClickItem}){
    return(
        <TouchableOpacity onPress={onClickItem}>
            <View style={styles.container}>
                <Image style={styles.img}
                source={{uri: product.image}}
                />
                <View  style={styles.body_container}>
                    <Text style={styles.p_title}>{product.title}</Text>
                    <Text style={styles.p_price}>{product.price}$</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};