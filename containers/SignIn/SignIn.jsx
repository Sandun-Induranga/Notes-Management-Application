import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { noteSlice } from "../../redux/noteSlice";

const SignIn = () => {
  const nickname = useSelector((state) => state.notes.nickname);
  const dispatch = useAppDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3e3e3",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 330,
          height: 300,
          padding: 20,
          elevation: 1,
          borderRadius: 5,
          backgroundColor: "white",
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
          onPress={() => {}}
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
    </View>
  );
};

export default SignIn;
