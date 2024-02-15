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
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: "#007AFF",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
          width: 300,
        }}
      >
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          Save Book
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
