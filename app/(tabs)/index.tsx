import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";


const placeholderImg = require('@/assets/images/profile.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
    else {
      alert("You didn't choose the image");
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <ImageViewer imgSource={placeholderImg} selectedImage={selectedImage} />
      </View>
      <View style={styles.footercontainer}>
        <Button theme="primary" label="Choose Image" onPress={pickImageAsync} />
        <Button label="Use this image" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center'
  },
  imagecontainer: {
    flex: 1,
    alignItems: 'center'
  },
  footercontainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});