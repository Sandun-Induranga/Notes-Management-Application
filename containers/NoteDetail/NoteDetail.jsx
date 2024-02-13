import React from "react";
import { View, Text, Image } from "react-native";

const NoteDetail = ({ route }) => {
  const { note } = route.params;
  return (
    <View
      style={{
        padding: 4,
        margin: 20,
        borderRadius: 4,
        flex: 1,
        alignItems: "center",
        gap: 40,
        padding: 10,
        marginHorizontal: 50,
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
          color: "gray",
        }}
      >
        {note.content}
      </Text>
    </View>
  );
};

export default NoteDetail;
