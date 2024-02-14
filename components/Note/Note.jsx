import { Text, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PopUp from "../PopUp/PopUp";
import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { notesActions } from "../../redux/noteSlice";
import editIcon from "../../assets/edit-icon.png";
import deleteIcon from "../../assets/delete-icon.png";
import viewIcon from "../../assets/view-icon.png";

const Note = ({ note }) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();

  const onClose = () => {
    setIsVisible(false);
    dispatch(noteSlice.actions.selectImage(""));
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
        // marginHorizontal: 80,
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
        width={200}
        height={150}
        style={{
          borderRadius: 4,
          marginBottom: 10,
        }}
      />

      <View style={{ flexDirection: "row", gap: 40 }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(notesActions.selectImage(note.image));
            setIsVisible(true);
          }}
        >
          <Image source={editIcon} width={20} height={20} />
        </TouchableOpacity>
        <PopUp
          isVisible={isVisible}
          note={note}
          onClose={onClose}
          isSave={false}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(notesActions.deleteNote(note.title));
          }}
        >
          <Image source={deleteIcon} width={20} height={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Note Details", { note: note });
          }}
        >
          <Image source={viewIcon} width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Note;
