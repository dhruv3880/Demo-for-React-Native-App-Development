import { StyleSheet, Text, View, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";

const placeholderImg = require('@/assets/images/profile.jpg');

export default function Index() {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOtpions, setShowAppOptions] = useState<boolean>(false);

  useEffect(() => {
    if (!status?.granted) {
      requestPermission();
    }
  }, [])



  async function pickImageAsync() {
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
  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {

  }

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('saved!');
        }

      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current,{
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }

  };



  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={placeholderImg} selectedImage={selectedImage} />
        </View>
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
          <Button label="Use this image" onPress={() => setShowAppOptions(true)} />
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