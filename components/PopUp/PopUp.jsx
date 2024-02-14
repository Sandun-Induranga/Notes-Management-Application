import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import ImagePickerInput from "../ImagePickerInput/ImagePickerInput";
import { useAppDispatch } from "../../redux/store";
import { notesActions } from "../../redux/noteSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import closeIcon from "../../assets/close-icon.png";

const PopUp = ({ isVisible, onClose, isSave, note }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState(note ? note.title : "");
  const [content, setContent] = useState(note ? note.content : "");
  const selectedImage = useSelector((state) => state.notes.selectedImage);

  useEffect(() => {
    if (!isSave) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, []);

  const handleSubmit = () => {
    if (isSave) {
      dispatch(
        notesActions.addNote({
          title: title,
          content: content,
          image: selectedImage,
        })
      );
    } else {
      dispatch(
        notesActions.updateNotes({
          title: title,
          content: content,
          image: selectedImage,
        })
      );
    }
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
            value={title}
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
            value={content}
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
              handleSubmit();
              onClose();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Save Book</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            backgroundColor: "white",
          }}
        >
          <Image source={closeIcon} width={24} height={24} />
        </TouchableOpacity>
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
