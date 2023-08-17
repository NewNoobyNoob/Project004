import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraScreen from './screens/CameraScreen';
import ImagePickerScreen from './screens/ImagePickerScreen';
import LocationScreen from './screens/LocationScreen';
import ContactsScreen from './screens/ContactsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CameraScreen />
      {/* <ImagePickerScreen /> */}
      {/* <LocationScreen /> */}
      {/* <ContactsScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
