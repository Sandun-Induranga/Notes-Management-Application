import { Text, Image, TouchableOpacity } from "react-native";

const Note = ({ note }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: 4,
        margin: 20,
        borderRadius: 4,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: 10,
        marginHorizontal: 50,
      }}
      onPress={() => {
        console.log("Note clicked");
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "gray",
        }}
      >
        {note.title}
      </Text>
      <Image
        source={{ uri: `data:image/png;base64,${note.image}` }}
        width={150}
        height={150}
      />
      <Text
        style={{
          fontSize: 16,
          color: "white",
        }}
      ></Text>
    </TouchableOpacity>
  );
};

export default Note;
