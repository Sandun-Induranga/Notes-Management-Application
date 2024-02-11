import React from "react";
import { View, FlatList } from "react-native";
import Note from "../../components/Note/Note";

const Home = () => {
  const data = [
    { id: "1", image: "", title: "John", content: "John content" },
    { id: "2", image: "", title: "Paul", content: "Paul content" },
    { id: "3", image: "", title: "George", content: "George content" },
    { id: "4", image: "", title: "Ringo", content: "Ringo content" },
    { id: "5", image: "", title: "Brian", content: "Brian content" },
    {
      id: "6",
      image: "",
      title: "George Martin",
      content: "George Martin content",
    },
    { id: "7", image: "", title: "Pete", content: "Pete content" },
    { id: "8", image: "", title: "Stuart", content: "Stuart content" },
    { id: "9", image: "", title: "Jim", content: "Jim content" },
    { id: "10", image: "", title: "Mal", content: "Mal content" },
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
