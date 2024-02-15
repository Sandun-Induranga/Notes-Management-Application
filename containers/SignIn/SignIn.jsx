import { View, TextInput } from "react-native";

const SignIn = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sign In</Text>
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline={true}
        style={{
          padding: 8,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
          width: 300,
          height: 100,
          marginBottom: 10,
        }}
      />
    </View>
  );
};

export default SignIn;
