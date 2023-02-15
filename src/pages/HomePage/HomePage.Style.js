import { Dimensions,StyleSheet } from 'react-native'

export default StyleSheet.create({
    container1:{
        flex: 1,
        width: Dimensions.get('screen').width/1,
        height: Dimensions.get('screen').height/20,
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 2,
        marginTop: 10
    },
    container2:{
        flex: 1,
        width: Dimensions.get('screen').width/1,
        height: Dimensions.get('screen').height/20,
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 2,
        marginTop: 10
    },
    extended_container1:{
        flex: 1,
        backgroundColor: '#ff5e62',
        width: Dimensions.get('screen').width,
        borderRadius: 5,
        justifyContent: 'space-between',
        marginBottom: 2,
        marginTop: 10,
    
    },
    extended_container2:{
        flex: 1,
        backgroundColor: '#ff5e62',
        width: Dimensions.get('screen').width/1,
        borderRadius: 5,
        justifyContent: 'space-evenly',
        alignItems:'center',
        flexDirection:'row',
        padding:5,
    },
    list_container1:{
        flex: 2,
    },
    list_container2:{
        flex: 15
    },
    ex_inner_container1: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    ex_inner_container2: {
        flex: 1,
    },
    filter_text: {
        fontWeight: 'bold',
        color: 'black',
        textAlign:'center'
    },
    filter_text_right: {
        fontWeight: 'bold',
        color: 'black',
        textAlign:'right',
        marginRight: 128,
    },
    btn:{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
    },
    btn_2:{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        marginRight:5
    },
    checkbox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
});