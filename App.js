import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./screens/Dashboard";

export default class App extends Component {
  render() {
    return <Dashboard />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
