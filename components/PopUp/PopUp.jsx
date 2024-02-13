import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import ImagePickerInput from "../ImagePickerInput/ImagePickerInput";
import { useAppDispatch } from "../../redux/store";
import { notesActions } from "../../redux/noteSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const PopUp = ({ isVisible, onClose }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const selectedImage = useSelector((state) => state.notes.selectedImage);

  const saveNote = () => {
    dispatch(
      notesActions.addNote({
        title,
        content,
        image: selectedImage,
      })
    );
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Save Book</Text>
          <Text style={styles.message}>Enter details to save book</Text>
          <TextInput
            placeholder="Title"
            onChangeText={(text) => setTitle(text)}
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
              width: 300,
              marginBottom: 10,
            }}
          />
          <ImagePickerInput />
          <TextInput
            placeholder="Content"
            onChangeText={(text) => setContent(text)}
            multiline={true}
            style={{
              padding: 8,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
              width: 300,
              height: 100,
              marginBottom: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              saveNote();
              onClose();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Save Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default PopUp;
