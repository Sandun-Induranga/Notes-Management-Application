import { Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import * as FileSystem from "expo-file-system";
import uploadImage from "../../assets/upload.jpg";

const ImagePickerInput = () => {
  const [image, setImage] = useState("");
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
    setImage(base64);
  };

  return (
    <View>
      <TouchableOpacity onPress={openImagePickerAsync}>
        {image != "" ? (
          <Image
            source={{ uri: `data:image/png;base64,${image}` }}
            style={{
              width: 300,
              height: 300,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
        ) : (
          <Image
            source={uploadImage}
            style={{
              width: 300,
              height: 300,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerInput;
