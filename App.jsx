import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./containers/Routes/Routes";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <StatusBar style="auto" />
    </Provider>
  );
};

export default App;
