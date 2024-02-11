import React from "react";
import { View, FlatList, Text, StatusBar } from "react-native";

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
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
