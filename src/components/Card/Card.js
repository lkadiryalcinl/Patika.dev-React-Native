/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import styles from './Card.styles';

const Card = ({CardInfo}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>{CardInfo.name}</Text>
      <Text style = {styles.Favourite}>{CardInfo?.isFavourite  ? "Favori" : "Favori Değil"}</Text>
    </View>
  );
};

export default Card;
