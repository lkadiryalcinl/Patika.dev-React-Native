import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style = {styles2.container}>
      <FlatList>  
      <Card  title = "John Doe" text = "Lorem ipsum dolor."></Card>
      <Card  title = "John Doe" text = "Lorem ipsum dolor."></Card>
      <Card  title = "John Doe" text = "Lorem ipsum dolor."></Card>
      </FlatList>
    </SafeAreaView>  
  );
};

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'e0e0e0',
  },
});

export default App;
