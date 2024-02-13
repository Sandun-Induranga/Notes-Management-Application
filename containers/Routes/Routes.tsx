import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NoteDetail from "../NoteDetail/NoteDetail";
import Home from "../Home/Home";

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
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NoteDetail"
          component={NoteDetail}
          initialParams={{ note }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
