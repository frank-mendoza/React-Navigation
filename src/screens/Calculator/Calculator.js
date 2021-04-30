import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, StyleSheet, StatusBar, Text } from "react-native";
import RowButton from "./RowButton";

const Calculator = () => {
  const navigation = useNavigation();

  const [currVal, setCurrVal] = useState("");
  const [operator, setOperator] = useState(null);
  const [prevVal, setPrevVal] = useState(null);

  function onBackPressed() {
    navigation.goBack();
  }

  const handleClick = (type, value) => {
    if (type === "number") {
      setCurrVal(`${currVal}${value}`);
    }

    if (type === "operator") {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal("");
    }

    if (type === "clear") {
      setCurrVal("");
      setOperator(null);
      setPrevVal(null);
    }

    if (type === "posneg") {
      setCurrVal(`${parseFloat(currVal) * -1}`);
    }

    if (type === "percentage") {
      setCurrVal(`${parseFloat(currVal) * 0.01}`);
    }

    if (type === "equal") {
      const current = parseFloat(currVal);
      const previous = parseFloat(prevVal);

      if (operator === "+") {
        setCurrVal(previous + current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "/") {
        setCurrVal(previous / current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "-") {
        setCurrVal(previous - current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === "*") {
        setCurrVal(previous * current);
        setOperator(null);
        setPrevVal(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>{currVal}</Text>
        <RowButton handleClick={handleClick} />
        {/* <Button title="Click to go Back" onPress={() => onBackPressed()} /> */}
      </SafeAreaView>
    </View>
  );
};
export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
