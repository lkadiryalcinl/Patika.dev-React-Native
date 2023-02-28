import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    img_container:{
        flex:1,
        backgroundColor:'white',
    },
    top_container:{
        backgroundColor:'#1762DF',
        padding:10,
        justifyContent:'space-around'
    },
    desc_container:{
        flex:8,
        backgroundColor:'white',
        padding:10,
    },
    bottom_container:{
        backgroundColor:'#1762DF',
        padding:10,
        justifyContent:'space-around'
    },
    img:{
        width:Dimensions.get('screen').width,
        minHeight:Dimensions.get('screen').height/3.1,
        resizeMode:'contain',
        backgroundColor:'white',
    },
    h1:{
        fontWeight:'bold',
        color:'white',
        fontSize:17
    },
    h2_1:{
        fontWeight:'bold',
        color:'white',
        textAlign:'right',
        fontSize:14
    },
    h2:{
        fontWeight:'bold',
        color:'white',
        fontSize:14
    },
    h3:{
        color:'black',
        fontWeight:'bold'
    },
});