import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as Speech from "expo-speech";
import React from "react";
import Home from "./containers/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./containers/Routes/Routes";

const App = () => {
  const _onPressSpeech = () => {
    Speech.speak("Hello, world!");
  };

  return (
    <Provider store={store}>
      <Home />
      <Routes>
        {/* <View> */}
        <StatusBar style="auto" />
        {/* </View> */}
      </Routes>
    </Provider>
  );
};

export default App;
