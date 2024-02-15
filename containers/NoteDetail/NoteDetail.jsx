import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import speakerImage from "../../assets/speaker.png";

const NoteDetail = ({ route }) => {
  const { note } = route.params;

  const _onPressSpeech = () => {
    Speech.stop();
    Speech.speak(note.content);
  };

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
        marginHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "gray",
        }}
      >
        {note.title}
      </Text>
      <Image
        source={{ uri: `data:image/png;base64,${note.image}` }}
        style={{
          width: 330,
          height: 200,
          borderRadius: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "gray",
        }}
      />
      <TouchableOpacity
        onPress={() => {
          _onPressSpeech();
        }}
      >
        <Image source={speakerImage} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          color: "gray",
        }}
      >
        {note.content}
      </Text>
    </View>
  );
};

export default NoteDetail;
