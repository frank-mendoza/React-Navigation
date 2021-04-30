import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Calculator from "../screens/Calculator/Calculator";
import Todo from "../screens/Todo-App/Todo-app";
import List from "../screens/List/List";
import Home from "../screens/Home";

const AppStack = createStackNavigator();
export default function Navigator() {
  // const navigation = useNavigation();

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({headerShown: false});
  // }, [navigation]);

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }}>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <AppStack.Screen name="List" component={List} />
        <AppStack.Screen name="Todo-App" component={Todo} />
        <AppStack.Screen name="Calculator" component={Calculator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
