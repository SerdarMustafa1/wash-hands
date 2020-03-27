import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

const handsVid = require("../../assets/How_to_wash.mp4");

Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View style={styles.container}>
      <Text>isPlaying: {JSON.stringify(isPlaying)}</Text>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: { handsVid },
          height: 200,
          width: 150
        }}
        icon='PlayIcon'
        inFullscreen={false}
        playbackCallback={status => {
          if (isPlaying !== status.isPlaying) {
            setIsPlaying(status.isPlaying);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80
  }
});

export default Player;
