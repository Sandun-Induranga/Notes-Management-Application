import { Image, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import uploadImage from "../../assets/upload.jpg";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { noteSlice } from "../../redux/noteSlice";

const ImagePickerInput = () => {
  const dispatch = useAppDispatch();
  const selectedImage = useSelector((state) => state.notes.selectedImage);

  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    console.log("image");

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    const base64 = await FileSystem.readAsStringAsync(
      pickerResult.assets[0].uri,
      {
        encoding: FileSystem.EncodingType.Base64,
      }
    );
    dispatch(noteSlice.actions.selectImage(base64));
  };

  return (
    <View>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          source={
            selectedImage != ""
              ? { uri: `data:image/png;base64,${selectedImage}` }
              : uploadImage
          }
          style={{
            width: 300,
            height: 300,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerInput;
