import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Button, div } from "react-native";
import { Component } from "react";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ animation: "fade" }}
          name="Messages"
          component={MessagesPage}
        />
        <Stack.Screen
          options={{ animation: "fade" }}
          name="Profile"
          component={ProfilePage}
        />
        <Stack.Screen
          options={{ animation: "fade" }}
          name="Feed"
          component={FeedPage}
        />
        <Stack.Screen
          options={{ animation: "fade" }}
          name="Settings"
          component={SettingsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
