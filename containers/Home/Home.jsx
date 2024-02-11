import React from "react";
import { View, FlatList, Text, StatusBar } from "react-native";

const Home = () => {
  const data = [
    { id: "1", name: "John" },
    { id: "2", name: "Paul" },
    { id: "3", name: "George" },
    { id: "4", name: "Ringo" },
  ];

  return (
    <View style={{ height: "100%" }}>
      <View style={{ height: "20%", backgroundColor: "powderblue" }} />

      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
