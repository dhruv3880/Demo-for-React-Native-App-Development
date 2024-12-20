import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";

const placeholderImg = require('@/assets/images/profile.jpg');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOtpions, setShowAppOptions] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }
    else {
      alert("You didn't choose the image");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {

  }

  const onSaveImageAsync = () => {

  }



  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <ImageViewer imgSource={placeholderImg} selectedImage={selectedImage} />
      </View>
      {showAppOtpions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Refresh" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footercontainer}>
          <Button theme="primary" label="Choose Image" onPress={pickImageAsync} />
          <Button label="Use this image" />
        </View>
      )}
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});