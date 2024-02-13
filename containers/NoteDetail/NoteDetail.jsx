import React from "react";
import { View, Text } from "react-native";

const NoteDetail = ({ route }) => {
  const { note } = route.params;
  console.log(note.title);
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default NoteDetail;
