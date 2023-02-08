import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MessagesPage } from "./screens/MessagesPage";
import { FeedPage } from "./screens/FeedPage";
import { HomePage } from "./screens/HomePage";
import { SettingsPage } from "./screens/SettingsPage";
import { ProfilePage } from "./screens/ProfilePage";
import { StyleSheet, Text, View, Button, div } from "react-native";
import { Component } from "react";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false, animation: "fade" }}
          name="Messages"
          component={MessagesPage}
        />
        <Stack.Screen
          options={{ headerShown: false, animation: "fade" }}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          options={{ headerShown: false, animation: "fade" }}
          name="Profile"
          component={ProfilePage}
        />
        <Stack.Screen
          options={{ headerShown: false, animation: "fade" }}
          name="Feed"
          component={FeedPage}
        />
        <Stack.Screen
          options={{ headerShown: false, animation: "fade" }}
          name="Settings"
          component={SettingsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
