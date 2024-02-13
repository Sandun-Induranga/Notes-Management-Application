import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as Speech from "expo-speech";
import React from "react";
import Home from "./containers/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  const _onPressSpeech = () => {
    Speech.speak("Hello, world!");
  };

  return (
    <Provider store={store}>
      <View>
        <Home />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

export default App;
