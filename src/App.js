import React from 'react';
import { View,Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import InfoBar from './components/InfoBar';
import Input from './components/Input';
import TodoCard from './components/TodoCard';

const App = () =>{
    
    const [todo,setTodo] = React.useState('');
    const [list, setList] = React.useState([]);
    const [activate,setActivate] = React.useState(false);


    const addTodo = () => {
        setList([...list, {
          action: todo,
          id: Math.random() + Date.now(),
          isDone: false,
        }]);
        setTodo('');
        setActivate(false);
      }
    
      const completedTodo = (id) => {
        const newList = list.map(element => {
          if (element.id == id) {
            element.isDone = !element.isDone;
          }
          return element;
        })
        setList(newList);
      }
    
      const removeTodo = (id) => {
        const copyList = list.filter(element => element.id !== id)
        setList(copyList);
      }

      const renderTodo = ({ item }) => <TodoCard data={item} completedTodo={completedTodo} removeTodo={removeTodo} activate={activate} setActivate={setActivate}/>
    
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.top_container}>
                <InfoBar list={list}/>
            </View>
                <FlatList
                data={list}
                renderItem={renderTodo}
            />
            <View style = {styles.bottom_container}>
                <Input todo={todo} setTodo={setTodo} addTodo={addTodo} activate={activate} setActivate={setActivate} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#102027',
    },
    top_container: {
        flex: 1,
    },
    bottom_container: {
    },
});
export default App;