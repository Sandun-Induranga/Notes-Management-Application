import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as Speech from "expo-speech";
import React from "react";

const App = () => {
  const _onPressSpeech = () => {
    Speech.speak("Hello, world!");
  };

  return (
    <View>
      <Text>Open up App.jsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text onPress={_onPressSpeech}>Press me to hear speech</Text>
    </View>
  );
};

export default App;
