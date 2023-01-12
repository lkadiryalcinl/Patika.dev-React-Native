/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        borderRadius: 10,
        flexDirection: 'row',
      },
      Favourite: {
        flex: 1,
        fontWeight: 'bold',
        color: 'red',
      },
      title: {
        flex: 1,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        marginRight: 10,
        backgroundColor: '#fc4a1a',
        textAlign: 'center',
      },
});
