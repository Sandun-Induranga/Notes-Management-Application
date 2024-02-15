import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { noteSlice } from "../../redux/noteSlice";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const nickname = useSelector((state) => state.notes.nickname);
  const dispatch = useAppDispatch();
  const navigate = useNavigation();
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3e3e3",
      }}
      source={require("../../assets/signin-background.jpg")}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 330,
          height: 300,
          padding: 20,
          elevation: 1,
          borderRadius: 10,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Text
          style={{
            fontSize: 34,
            marginBottom: 20,
            color: "gray",
          }}
        >
          Sign In
        </Text>
        <TextInput
          placeholder="Nickname"
          value={nickname}
          onChangeText={(text) => {
            dispatch(noteSlice.actions.setNickname(text));
          }}
          style={{
            padding: 8,
            borderWidth: 1,
            borderColor: "#e3e3e3",
            borderRadius: 5,
            width: "100%",
            marginBottom: 10,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigate.navigate("Home");
          }}
          style={{
            backgroundColor: "lightblue",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
            width: "100%",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SignIn;
