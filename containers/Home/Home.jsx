import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";
import Note from "../../components/Note/Note";
import PopUp from "../../components/PopUp/PopUp";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { noteSlice } from "../../redux/noteSlice";
import topBackground from "../../assets/top-background.jpg";

const Home = () => {
  const dispatch = useAppDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    dispatch(noteSlice.actions.fetchNotes());
  }, []);

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={{ height: "100%", backgroundColor: "#e5e5e5" }}>
      <View
        style={{
          height: "25%",
          paddingTop: 40,
        }}
      >
        <Image
          source={topBackground}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <Text
          style={{
            fontSize: 30,
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
          marginHorizontal: 20,
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
        data={notes}
        renderItem={({ item }) => <Note note={item} />}
        keyExtractor={(item) => item.id}
      />

      <PopUp isVisible={isVisible} onClose={onClose} isSave={true} />
    </View>
  );
};

export default Home;
