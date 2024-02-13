import { createStackNavigator } from "@react-navigation/stack";
import NoteDetail from "../NoteDetail/NoteDetail";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={NoteDetail} />
    </Stack.Navigator>
  );
};

export default Routes;
