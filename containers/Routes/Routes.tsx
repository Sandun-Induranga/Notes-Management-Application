import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NoteDetail from "../NoteDetail/NoteDetail";
import Home from "../Home/Home";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="home" component={Home} /> */}
        <Stack.Screen name="Details" component={NoteDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
