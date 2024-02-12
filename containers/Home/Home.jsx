import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import Note from "../../components/Note/Note";
import { readNotes } from "../../repository/notesRepository";
import PopUp from "../../components/PopUp/PopUp";

const Home = () => {
  const data = readNotes();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ height: "100%" }}>
      <View
        style={{ height: "20%", backgroundColor: "powderblue", paddingTop: 40 }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Your Library
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 40,
          borderRadius: 100,
          backgroundColor: "skyblue",
          justifyContent: "center",
          margin: 20,
        }}
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
          Add Book
        </Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={({ item }) => <Note note={item} />}
        keyExtractor={(item) => item.id}
      />

      <PopUp isVisible={isVisible} onClose={{}} />
    </View>
  );
};

export default Home;
