import { Text, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PopUp from "../PopUp/PopUp";
import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { notesActions } from "../../redux/noteSlice";

const Note = ({ note }) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 4,
        margin: 20,
        borderRadius: 4,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: 10,
        marginHorizontal: 50,
      }}
      onPress={() => {
        console.log("Note clicked");
        navigation.navigate("Note Details", { note: note });
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "gray",
        }}
      >
        {note.title}
      </Text>
      <Image
        source={{ uri: `data:image/png;base64,${note.image}` }}
        width={150}
        height={150}
      />

      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(notesActions.selectImage(note.image));
            setIsVisible(true);
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "gray",
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
        <PopUp
          isVisible={isVisible}
          note={note}
          onClose={onClose}
          isSave={false}
        />

        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              fontSize: 16,
              color: "gray",
            }}
          >
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Note Details", { note: note });
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "gray",
            }}
          >
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Note;
