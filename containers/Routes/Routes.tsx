import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NoteDetail from "../NoteDetail/NoteDetail";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";

const Stack = createStackNavigator();
const Routes = () => {
  const note = {
    title: "Note 1",
    Image:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    content: "This is the content of the note",
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Note Details"
          component={NoteDetail}
          initialParams={{ note }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
