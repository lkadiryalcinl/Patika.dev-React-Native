import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    top_container:{
        marginBottom:10,
        borderRadius:5,
    },
    bottom_container:{
    },
    h1_text : {
        fontWeight: 'bold',
        color: '#A52A2A',
        fontSize: 30,
    },
    h2_text : {
        fontWeight: 'bold',
        color: '#A52A2A',
        fontSize: 20,
    },
    h3_text : {
        fontWeight: 'bold',
        color: 'black'
    },
    h4_text : {
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center'
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height/3
    },
    ref_button: {
        margin: 10,
        padding:15,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 30,
    }
});