import { Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import * as FileSystem from "expo-file-system";

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
    setImage(pickerResult);
    const base64 = await FileSystem.readAsStringAsync(
      pickerResult.assets[0].uri,
      {
        encoding: FileSystem.EncodingType.Base64,
      }
    );
    console.log(base64 + "image");
  };

  return (
    <View>
      {image != "" && (
        <Image source={{ uri: image.assets[0].uri }} width={200} height={200} />
      )}

      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerInput;
