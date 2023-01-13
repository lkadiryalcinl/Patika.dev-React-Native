/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View, Image} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style = {styles.container}>
        <Image style = {styles.Image} source = {{uri:"https://img.icons8.com/material-rounded/512/search.png"}}/>
      <TextInput
      placeholder="Search..." onChangeText={props.SearchResult}/>
    </View>
  );
};

export default SearchBar;
