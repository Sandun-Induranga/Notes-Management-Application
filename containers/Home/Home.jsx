import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";
import Note from "../../components/Note/Note";
import PopUp from "../../components/PopUp/PopUp";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { noteSlice } from "../../redux/noteSlice";
import topBackground from "../../assets/top-background.jpg";
import logoutIcon from "../../assets/logout.png";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const dispatch = useAppDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const nickname = useSelector((state) => state.notes.nickname);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigation();

  useEffect(() => {
    dispatch(noteSlice.actions.fetchNotes());
    dispatch(noteSlice.actions.selectImage(""));
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
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
          }}
        >
          {"Hi, " + nickname}
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 50,
            right: 20,
          }}
          onPress={() => {
            dispatch(noteSlice.actions.setNickname(""));
            navigate.navigate("SignIn");
          }}
        >
          <Image
            source={logoutIcon}
            style={{
              width: 20,
              height: 20,
              tintColor: "white",
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
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
          Add Note
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
