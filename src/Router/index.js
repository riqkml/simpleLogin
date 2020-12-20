import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { loginScreen, registerScreen, splashScreen } from "../Pages";
const Stack = createStackNavigator();
const header = { headerShown: false };
export default class Router extends Component {
  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={splashScreen}
            options={header}
          />
          <Stack.Screen name="Login" component={loginScreen} options={header} />
          <Stack.Screen
            name="Register"
            component={registerScreen}
            options={header}
          />
        </Stack.Navigator>
      </>
    );
  }
}
