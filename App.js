import * as React from "react";
import { Text, StyleSheet, View, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "./src/screens/Dashboard";
import WashHandsScreen from "./src/screens/WashHands";
import Reminders from "./src/screens/Reminders";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Dashboard />
    </SafeAreaView>
  );
}

function WashHands() {
  return (
    <SafeAreaView style={styles.container}>
      <WashHandsScreen />
    </SafeAreaView>
  );
}

function ReminderScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Reminders />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="How to?" component={WashHands} />
      {Platform.ios ? (
        <Tab.Screen name="Reminder" component={ReminderScreen} />
      ) : null}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
