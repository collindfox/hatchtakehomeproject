import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { StyleSheet, Text, View, Button, div } from "react-native";
//import { Component } from "react";
import { FeedPage } from "../AwesomeProject/screens/FeedPage";
import { MessagesPage } from "../AwesomeProject/screens/MessagesPage";
import { ProfilePage } from "../AwesomeProject/screens/ProfilePage";
import { SettingsPage } from "../AwesomeProject/screens/SettingsPage";
import { HomePage } from "../AwesomeProject/screens/HomePage";

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
        <Stack.Screen
          options={{ animation: "fade" }}
          name="Home"
          component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
