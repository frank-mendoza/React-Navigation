import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import Task from "./components/Task";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();

  function onBackPressed() {
    navigation.goBack();
  }
  const handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true;
      })
    );
  };

  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  };
  return (
    // <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={require('./BackgroudColor.jpg')}>
    <View style={styles.container}>
      <Text style={{ marginTop: "20%", fontSize: 30, color: "#000" }}>
        Your task for today
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={(value) => setValue(value)}
          placeholder={"Add it now!"}
          placeholderTextColor="#000"
          value={value}
        />
        <TouchableOpacity onPress={() => handleAddTodo()}>
          <Icon
            name="plus"
            size={30}
            color="#fff"
            style={{
              marginLeft: 15,
              backgroundColor: "#900",
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {todos.map((task) => (
          <Task
            text={task.text}
            key={task.key}
            checked={task.checked}
            setChecked={() => handleChecked(task.key)}
            delete={() => handleDeleteTodo(task.key)}
          />
        ))}
      </ScrollView>
      {/* <Button title="Click to go Back" onPress={() => onBackPressed()} /> */}
    </View>
    // </ImageBackground>
  );
};
export default Todo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    height: 20,
    flex: 1,
    minHeight: "7%",
    marginTop: "5%",
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    paddingLeft: 10,
  },
  taskWrapper: {
    marginTop: "5%",
    flexDirection: "row",
    // alignItems: 'baseline',
    borderColor: "#D0D0D0",
    borderBottomWidth: 0.5,
    width: "100%",
    alignItems: "stretch",
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: "white",
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    borderColor: "rgb(222,222,222)",
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5,
    marginTop: 15,
  },
});
