import React from "react";
import { View, Text } from "react-native";

const Note = ({ note }) => {
  return (
    <View
      style={{
        backgroundColor: "powderblue",
        padding: 4,
        margin: 20,
        borderRadius: 4,
      }}
    >
      <Text>{note.title}</Text>
    </View>
  );
};

export default Note;
