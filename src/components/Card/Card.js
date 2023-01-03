/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './Card.styles';

const Card = ({StoreItem}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: StoreItem.imgURL}}/>
        <Text style={styles.title}> {StoreItem.title} </Text>
        <Text style={styles.priceText}> {StoreItem.price} </Text>
        <Text style={styles.stockInfo}> {(StoreItem.inStock ? '' : 'STOKTA YOK') } </Text>
    </View>
  );
};

export default Card;
