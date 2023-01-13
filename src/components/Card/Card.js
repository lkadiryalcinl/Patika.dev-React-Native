/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './Card.styles';

const Card = props => {
  return (
    <View style = {styles.container}>
      <Image style = {styles.Image} source={{uri : props.CardInfo.imageUrl}}/>
      
      <View style = {styles.inner_container}>
        <Text style = {styles.title}>{props.CardInfo.title}</Text>

        <View style = {styles.content_container}>

        <View style = {styles.inner_info}>
          <Text style = {styles.artist}>{props.CardInfo.artist}</Text>
          <Text style = {styles.year}>{props.CardInfo.year}</Text>
        </View>
        
        {props.CardInfo.isSoldOut && (
        <View style = {styles.soldOutContainer}>
          <Text style = {styles.soldOutTitle}>{props.CardInfo.isSoldOut ? "Tükendi" : ""}</Text>
        </View>)}

        </View>

      </View>
    </View>
  );
};

export default Card;
