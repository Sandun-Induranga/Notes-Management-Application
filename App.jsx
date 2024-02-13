import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./containers/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./containers/Routes/Routes";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Home />
        {/* <View> */}
        <StatusBar style="auto" />
        {/* </View> */}
      </Routes>
    </Provider>
  );
};

export default App;
