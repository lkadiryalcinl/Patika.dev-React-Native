import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    label_container: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: Dimensions.get('screen').width/1.55,
    },
    input_container: {
        flex: 2.7,
        alignItems: 'center',
    },
});