import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function navigateToList() {
    navigation.navigate("List");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Click to see more</Text>
      <View style={styles.wrapper}>
        <Button
          style={styles.button}
          title="Go to App List"
          color="blue"
          onPress={() => navigateToList()}
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
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 50,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
  },
});
