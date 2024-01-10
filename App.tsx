import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import LearnTS090124 from './Exercises/LearnTS090124';
// import LearnTS100124 from './Exercises/LearnTS100124';
// import LearnTS100124_Interface from './Exercises/LearnTS100124_Interface';
// import LearnTS100124_Classes from './Exercises/LearnTS100124_Classes';
import LearnTS100124_Generics from './Exercises/LearnTS100124_Generics';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <LearnTS090124/> */}
      {/* <LearnTS100124/> */}
      {/* <LearnTS100124_Interface/> */}
      {/* <LearnTS100124_Classes/> */}
      <LearnTS100124_Generics />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
