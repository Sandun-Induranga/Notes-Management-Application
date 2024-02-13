import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

const Note = ({ note }) => {
  useEffect(() => {
    console.log("come");
  }, []);
  return (
    <View
      style={{
        backgroundColor: "powderblue",
        padding: 4,
        margin: 20,
        borderRadius: 4,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: 10,
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
    </View>
  );
};

export default Note;
