import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderWidth: 2,
        borderColor: '#ff5e62',
        backgroundColor: '#ff5e62',
    },
    img:{
        width: Dimensions.get('screen').width/3,
        minHeight: Dimensions.get('screen').height/5.8,
        resizeMode: 'contain',
        backgroundColor: 'white',
        margin: 3,
    },
    body_container: {
        flex: 1,
        justifyContent: 'space-between',
        margin: 10,
    }, 
    p_title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    },
    p_price: {
        textAlign: 'right',
        color: 'black',
    }
});