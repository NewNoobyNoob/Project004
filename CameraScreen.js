import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [capturedPictureUri, setCapturedPictureUri] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleCapture = async () => {
        if(cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            // console.log(photo);
            setCapturedPictureUri(photo.uri);
        }
    }

  return (
    <View>
      {hasPermission ? ( 
      <Camera style={{width: 400, height: 400}} ref={cameraRef} /> 
      ) : (
      <Text>No Access To Camera</Text>
      )}
      <Button title='Take a picture' onPress={handleCapture} />
      {capturedPictureUri && <Image source={{uri: capturedPictureUri}} style={{ flex: 1 }} />}
    </View>
  );
};

export default CameraScreen;

// some problem solutions
// https://legacy.reactjs.org/warnings/invalid-hook-call-warning.html