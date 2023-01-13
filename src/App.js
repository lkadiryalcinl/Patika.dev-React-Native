/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar';
import data from './data.json';

const App = () => {
  const musicAppData = ({item}) => <Card CardInfo = {item}/>
  const seperator = () => <View  style = {styles.seperator}/>

  const onSearch = search => {
    const filteredSearch = data.filter(song => {
      const searchedText = search.toLowerCase();
      const currentTitle = song.title.toLocaleLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })
    setResult(filteredSearch);
  }

  const [result,setResult] = useState(data);
  return (
    <View style = {styles.container}>
      <SearchBar SearchResult = {onSearch}/>
      <FlatList
      keyExtractor={item => item.id.toString()}
      data={result}
      renderItem = {musicAppData}
      ItemSeparatorComponent = {seperator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
  },
});
export default App;
