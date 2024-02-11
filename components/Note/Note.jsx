import React from "react";
import { View, Text } from "react-native";

const Note = ({ note }) => {
  return (
    <View style={{ backgroundColor: "powderblue" }}>
      <Text>{note.title}</Text>
    </View>
  );
};

export default Note;
