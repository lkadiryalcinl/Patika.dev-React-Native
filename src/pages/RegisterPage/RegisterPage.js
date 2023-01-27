import React,{useState} from 'react'
import { Alert,View} from 'react-native'
import styles from './RegisterPage.Style';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function RegisterPage(props) {

    const[userName, setUserName] = useState(null);
    const[userSurname, setUserSurname] = useState(null);
    const[userAge, setUserAge] = useState(null);
    const[userMail, setUserMail] = useState(null);
    const[userHomeTown, setUserHomeTown] = useState(null);

    function handeSubmit() {
        if(!userName || !userSurname || !userAge ||  !userMail || !userHomeTown){
            Alert.alert('Hiçbir Bilgi Boş Bırakılamaz');
            return;
        }
            
        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHomeTown,
        }

        props.navigation.navigate('Info Page',{user});
    }
    return(
        <View style = {styles.container}>
        <Input label={'Adınız'} placeholder = 'Adınızı girin...' onChangeText={setUserName}/>
        <Input label={'Soyadınız'} placeholder = 'Soyadınızı girin...' onChangeText={setUserSurname}/>
        <Input label={'Yaşınız'} placeholder = 'Yaşınızı girin...' onChangeText={setUserAge}/>
        <Input label={'E-mail'} placeholder = 'E-mail Adresinizi girin...' onChangeText={setUserMail}/>
        <Input label={'Memleketiniz'} placeholder = 'Memleketinizi girin...' onChangeText={setUserHomeTown}/>
        <Button title={'Kayıt ol'} onPressFunc = {handeSubmit}/>

        </View>
    );
};

