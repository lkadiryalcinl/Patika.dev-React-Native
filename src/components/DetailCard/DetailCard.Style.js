import { StyleSheet,Dimensions, } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    sub_container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    img_container: {
        backgroundColor: 'white'
    },
    body_container: {
        flex:1,
        justifyContent: 'space-between',
        backgroundColor:'#ff5e62',
        borderRadius:20,
        margin:7,
        borderWidth:2,
        borderColor: '#f7b733',
        padding:5,
    },
    desc_container: {
        margin: 7,
        flex:2.5,
        backgroundColor:'#ff5e62',
        borderRadius:20,
        borderWidth:2,
        borderColor: '#f7b733',
        padding:5,
    },
    bottom_container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor:'#ff5e62',
        margin:7,
        borderRadius:20,
        borderWidth:2,
        borderColor: '#f7b733',
        padding:5
    },
    img: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height/2.8,
        resizeMode: 'contain',
    },
    title: {
        color:'white',
        textAlign:'center',
    },
    price: {
        textAlign: 'right',
        paddingRight:20,
        color:'white',
    },
    desc:{
        color:'white',
        margin:20
    },
    category: {
        textAlign:'center',
        color:'white'
    },
    rating: {
        textAlign:'center',
        color:'white'
    }
});