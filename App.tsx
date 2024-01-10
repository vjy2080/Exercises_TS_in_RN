import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LearnTS100124_Interface from './Exercises/LearnTS100124_Interface';
// import LearnTS090124 from './Exercises/LearnTS090124';
// import LearnTS100124 from './Exercises/LearnTS100124';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <LearnTS090124/> */}
      {/* <LearnTS100124/> */}
      <LearnTS100124_Interface/>
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
});
