/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Switch,
} from 'react-native';
import Card from './components/Card/Card';
import data from './data.json';

const App = () => {
  const [cafeItem, setCafeItem] = React.useState(data)
  const [isEnabled, setIsEnabled] = React.useState(false)
  const CardInfo = ({item}) => <Card CardInfo={item} />;

  function toggleSwitch(isSelected) {
    setIsEnabled(isSelected);
    isSelected ? setCafeItem(cafeItem.filter(cafeItem => cafeItem.isFavourite)) : setCafeItem(data);
  }
  
  return (
    <SafeAreaView>
      <View style = {styles.container}>
      <Text style = {styles.text}>Get the Favourite Cafe's</Text>
      <Switch style = {styles.switchFav} value = {isEnabled} onValueChange = {toggleSwitch} />
      </View>
      <FlatList
      data={cafeItem}
      renderItem = {CardInfo}s
      keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  text: {
    flex:1,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fc4a1a',
  },
  switchFav: {
    flex: 1,
  },
});
export default App;
