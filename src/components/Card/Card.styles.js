/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 10,
    },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
      },
      inner_container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 30,
      },
      Image: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      inner_info: {
        flexDirection: 'row',
        flex: 1,
        alignItems : 'center',
      },
      year: {
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 10,
      },
      artist: {
        color: 'black',
      },
      soldOutTitle: {
        color : 'red',
      },
      soldOutContainer: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
        marginRight: 10,
      },
      content_container: {
        flexDirection : 'row',
      },
});
