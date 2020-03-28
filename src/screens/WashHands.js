import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Modal
} from "react-native";
import { Dimensions } from "react-native";
import { WebView } from "react-native-webview";

import * as Haptics from "expo-haptics";
import { Audio } from "expo-av";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

import Player from "../components/VideoPlayer";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const image = require("../../assets/kids-washing-hands.png");

const WashHands = () => {
  successNotification = async () => {
    const successSoundObject = new Audio.Sound();
    try {
      await successSoundObject.loadAsync(require("../../assets/success.mp3"));
      await successSoundObject.playAsync();
      // sound is playing!
    } catch (error) {
      // An error occurred!
    }
  };

  correctAnswer = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    successNotification();
    Alert.alert(
      "You're Correct!",
      "Well Done!",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  inCorrectAnswer = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    Alert.alert(
      "Incorrect!",
      "Try again?",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        marginHorizontal: 12
      }}
    >
      <Text style={styles.title}>Do you know how to wash your hands?</Text>
      <ScrollView>
        <Image source={image} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.subTitle}>Let's play a game!</Text>

          <Text style={styles.question}>
            How long should we scrub our hands for to make sure they are really
            clean?
          </Text>

          <Text style={styles.options}>Choose an option:</Text>

          <View style={styles.answers}>
            <TouchableHighlight
              underlayColor="#f00"
              activeOpacity={1}
              onPress={() => inCorrectAnswer()}
            >
              <Text style={styles.answerBox}>5 Seconds</Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#f00"
              activeOpacity={1}
              onPress={() => inCorrectAnswer()}
            >
              <Text style={styles.answerBox}>10 Seconds</Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#0f0"
              activeOpacity={1}
              onPress={() => correctAnswer()}
            >
              <Text style={styles.answerBox}>20 Seconds</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.chevron}>
            <Ionicons name="ios-arrow-dropdown" size={32} color="#256faf" />
          </View>
          <View>
            <Text style={styles.subTitle}>Shall we practise togther?</Text>
            <Text style={styles.question}> Click below to start</Text>

            <Player />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#256faf",
    textTransform: "uppercase",
    marginTop: 20,
    textAlign: "center"
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: 300,
    justifyContent: "center",
    marginLeft: 10
  },
  subTitle: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#256faf",
    textAlign: "center"
  },
  question: {
    marginBottom: 5,
    textAlign: "center"
  },
  options: {
    marginTop: 15,
    marginBottom: 7,
    fontWeight: "500",
    color: "#256faf",
    textAlign: "center"
  },
  answers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 3
  },
  answerBox: {
    borderWidth: 1,
    borderColor: "#256faf",
    borderRadius: 10,
    padding: 5
  },
  chevron: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  youTube: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 50,
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: "#FF0001"
  }
});

export default WashHands;
