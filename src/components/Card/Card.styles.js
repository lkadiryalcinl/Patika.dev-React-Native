/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    width: Dimensions.get('window').width / 2.2,
    borderRadius: 10,
    margin: 4,
    padding: 10,
  },
  image: {
    height: Dimensions.get('screen').height/4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  title: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stockInfo: {
    paddingBottom: 5,
    color: 'red',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
