/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';

import Card from './components/Card';
import Store_Data from './Store_Data.json';

const App = () => {
  const StoreItem = ({item}) => <Card StoreItem={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.text}>
          PATIKASTORE
        </Text>
      </View>
      <View>
        <TextInput style = {styles.text_input} placeholder = "Ara..." />
      </View>

      <FlatList
      horizontal={false}
      data={Store_Data}
      renderItem = {StoreItem}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding:10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 12,
    marginBottom : 6,
    paddingTop: 6,

  },
  text_input: {
      borderWidth: 2,
      borderRadius: 12,
      padding: 8,
      margin: 8,
      backgroundColor: '#gray',
  },
});
export default App;
