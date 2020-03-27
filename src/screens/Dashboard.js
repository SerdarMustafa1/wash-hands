import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform
} from "react-native";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const image = {
  uri: "https://media.giphy.com/media/idShevOa24HzYTgz06/giphy.gif"
};

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's learn together</Text>
      <Image style={styles.image} source={image} />
    </View>
  );
};

// Dashboard.navigationOptions = {
//   headerTitle: "Let's learn together",
//   headerStyle: {
//     backgroundColor: Platform.OS === "android" ? "#256faf" : "256faf"
//   },
//   headerTintColor: Platform.OS === "android" ? "#256faf" : "#256faf"
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "#256faf",
    textTransform: "uppercase",
    marginTop: 20
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: 300,
    justifyContent: "center"
  }
});

export default Dashboard;
