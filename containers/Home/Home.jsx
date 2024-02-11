import React from "react";
import { View, FlatList } from "react-native";
import Note from "../../components/Note/Note";
import { readNotes } from "../../repository/notesRepository";

const Home = () => {
  const data = readNotes();

  return (
    <View style={{ height: "100%" }}>
      <View style={{ height: "20%", backgroundColor: "powderblue" }} />

      <FlatList
        data={data}
        renderItem={({ item }) => <Note note={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
