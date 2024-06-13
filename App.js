import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useWindowDimensions } from 'react-native';

export default function App() {
  const { width, height } = useWindowDimensions();
  const window = useWindowDimensions();
  const SLIDER_WIDTH = window.width;
  const SLIDER_HEIGHT = window.height;
  // Calculate the size of the square container to be responsive

  return (
    <View style={styles.container}>
      <View style={[styles.square, { width: SLIDER_WIDTH/1.1, height: SLIDER_HEIGHT/2.1 }]} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: 'blue',
  },
});
