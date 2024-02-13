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
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {note.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "white",
        }}
      >
        {note.content}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "white",
        }}
      >
        {note.image}
      </Text>
      <Image source={{ uri: note.image }} />
    </View>
  );
};

export default Note;
