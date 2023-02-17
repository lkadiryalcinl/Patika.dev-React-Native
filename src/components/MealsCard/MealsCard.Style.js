import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 10
    },
    image_container: {
        flex: 7,
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height/3,
    },
    text_container: {
        flex: 3,
        margin : 10
    },
    text: {
        textAlign:'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    }
})
