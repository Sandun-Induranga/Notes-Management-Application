import React from "react";
import { View, FlatList } from "react-native";
import Note from "../../components/Note/Note";

const Home = () => {
  const data = [
    { id: "1", image: "", title: "John", content: "John content" },
    { id: "2", image: "", title: "Paul", content: "Paul content" },
    { id: "3", image: "", title: "George", content: "George content" },
    { id: "4", image: "", title: "Ringo", content: "Ringo content" },
  ];

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
