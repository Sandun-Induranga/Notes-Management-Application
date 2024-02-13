import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import Note from "../../components/Note/Note";
import PopUp from "../../components/PopUp/PopUp";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { noteSlice } from "../../redux/noteSlice";

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
        data={notes}
        renderItem={({ item }) => <Note note={item} />}
        keyExtractor={(item) => item.id}
      />

      <PopUp isVisible={isVisible} onClose={onClose} />
    </View>
  );
};

export default Home;
