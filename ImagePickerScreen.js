import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerScreen = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        // console.log(result);
        if(!result.canceled) {
            setImage(result.assets[0].uri)
        }
    };

  return (
    <View>
      { image && 
      (<Image source={{ uri: image}} style={{ with: 300, height: 300 }} />
      )}
      <Button title='Pick an image' onPress={pickImage} />
    </View>
  )
}

export default ImagePickerScreen;