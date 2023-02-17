import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white'
    },
    image_container: {
        borderRadius: 100,
    },
    image: {
        width: Dimensions.get('screen').width/3,
        height: Dimensions.get('screen').height/9,
        resizeMode: 'contain',
        margin:10,
        borderRadius:5,

    },
    text: {
        textAlign:'center',
        fontWeight: 'bold',
        color: 'black',
    }
});