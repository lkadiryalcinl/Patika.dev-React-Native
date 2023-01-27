import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width/1.1,
        height: Dimensions.get('screen').height/5,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    text : {
        fontWeight: 'bold',
        color: 'blue'

    }
});