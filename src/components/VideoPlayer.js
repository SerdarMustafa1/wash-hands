import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from "react-native";

import WebView from "react-native-webview";
import { FontAwesome } from "@expo/vector-icons";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

const handsVid = require("../../assets/How_to_wash.mp4");

Player = props => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.youTube}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="youtube-play" size={48} color="#FF0001" />
      </TouchableOpacity>

      <Modal
        style={{}}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#fefefe",
            marginVertical: 200
          }}
        >
          <WebView
            javaScriptEnabled={true}
            style={{
              flex: 1,
              height: 400,
              width: 400
            }}
            source={{
              uri: "https://youtu.be/S9VjeIWLnEg"
            }}
          />
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                textTransform: "uppercase",
                marginVertical: 10
              }}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  youTube: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 30
  }
});

export default Player;
