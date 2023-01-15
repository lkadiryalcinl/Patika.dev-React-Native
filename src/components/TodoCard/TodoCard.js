import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './TodoCard.style';

const TodoCard = ({data, completedTodo, removeTodo, activate, setActivate}) => {
    return (
        <TouchableOpacity
            onPress={() => { completedTodo(data.id) }}
            onLongPress={() => { removeTodo(data.id) }}
        >
            <View
                style={data.isDone ? styles.after_completed_container : styles.before_completed_container}>
                <Text style={data.isDone ? styles.after_completed_text : styles.before_completed_text}>{data.action}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TodoCard;