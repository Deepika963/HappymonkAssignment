import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";

const MyImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImagePicker = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.error) {
        console.log("Error selecting image");
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePicker} style={styles.button}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 100, height: 100 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MyImagePicker;
