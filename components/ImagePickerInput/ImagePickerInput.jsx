import { Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const ImagePickerInput = () => {
  const [image, setImage] = useState("");
  const openImagePickerAsync = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    setImage(pickerResult);
    console.log(pickerResult);
  };

  return (
    <View>
      {image != "" && (
        <Image source={{ uri: image.assets[0].uri }} width={100} height={100} />
      )}
      <Text>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerInput;
