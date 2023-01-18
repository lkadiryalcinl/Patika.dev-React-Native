import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions } from "react-native";


const App = () => {
  const[isActiveBtn1,setIsActiveBtn1] = useState(true);
  const[isActiveBtn2,setIsActiveBtn2] = useState(false);
  const[isActiveBtn3,setIsActiveBtn3] = useState(false);
  const[isActiveBtn4,setIsActiveBtn4] = useState(false);
  const[text,setText] = useState("Home Screen");

  function pressHandlerBtn1() {
    if(isActiveBtn1 === false)
      setIsActiveBtn1(true);
    setIsActiveBtn2(false);
    setIsActiveBtn3(false);
    setIsActiveBtn4(false);
  }

  function pressHandlerBtn2() {
      if(isActiveBtn2 === false)
      setIsActiveBtn2(true);
    setIsActiveBtn1(false);
    setIsActiveBtn3(false);
    setIsActiveBtn4(false);
  }

  function pressHandlerBtn3() {
      if(isActiveBtn3 === false)
      setIsActiveBtn3(true);
    setIsActiveBtn1(false);
    setIsActiveBtn2(false);
    setIsActiveBtn4(false);
  }

  function pressHandlerBtn4() {
      if(isActiveBtn4 === false)
      setIsActiveBtn4(true);
    setIsActiveBtn1(false);
    setIsActiveBtn2(false);
    setIsActiveBtn3(false);
  }
  function textHandler(val) {
    setText(val);
  }
  return (
    <View style = {styles.container}>
        {/* Top Part */}
        <View style = {styles.top_container}>
          <TextInput style = {styles.text_input} placeholder="Change the Home Screen Text" onChangeText={textHandler}/>
        </View>
        {/* Middle Part */}
        <View style = {styles.middle_container}>
        {/* Middle Top Part */}
        <View style= {styles.middle_top_container}>
          <Text style = {styles.home_text}>{text}</Text>
        </View>
        {/* Middle Bottom Part */}
        <View style = {styles.middle_bottom_container}>
            <TouchableOpacity style = {styles.btn} onPress={pressHandlerBtn1} delayPressIn={0} delayPressOut={0}>
              <Image source={!isActiveBtn1 ? require('./components/img/home_ico.png') : require('./components/img/home_select_ico.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btn} onPress={pressHandlerBtn2} delayPressIn={0} delayPressOut={0} >
            <Image source={!isActiveBtn2 ? require('./components/img/form_ico.png') : require('./components/img/forum_select_ico.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btn} onPress={pressHandlerBtn3} delayPressIn={0} delayPressOut={0}>
            <Image source={!isActiveBtn3 ? require('./components/img/person_ico.png') : require('./components/img/person_select_ico.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btn} onPress={pressHandlerBtn4} delayPressIn={0} delayPressOut={0}>
            <Image source={!isActiveBtn4 ? require('./components/img/settings_ico.png') : require('./components/img/settings_select_ico.png')}/>
            </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  top_container: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input: {
    backgroundColor: 'gray',
    borderRadius: 17,
    width: Dimensions.get('screen').width/1.11,
    color: 'white',
    textAlign:'center',
  },
  middle_container: {
    flex: 16,
    backgroundColor: '#C27AC0'
  },
  middle_top_container: {
    flex: 15,
    justifyContent: 'center'
  },
  middle_bottom_container: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  home_text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
});
export default App;