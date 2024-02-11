import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as Speech from "expo-speech";
import React from "react";
import Home from "./containers/Home/Home";

const App = () => {
  const _onPressSpeech = () => {
    Speech.speak("Hello, world!");
  };

  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
