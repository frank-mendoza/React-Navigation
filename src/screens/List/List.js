import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function navigateToTodo() {
    navigation.navigate("Todo-App");
  }
  function navigateToCalc() {
    navigation.navigate("Calculator");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> This is a Sample App</Text>
      <View style={styles.wrapper}>
        <Button
          style={styles.button}
          title="Go to Todo App"
          onPress={() => navigateToTodo()}
        />

        <Button
          style={styles.button}
          title="Go to Calculator"
          onPress={() => navigateToCalc()}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  wrapper: {
    height: 100,
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    height: 20,
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
  },
});
