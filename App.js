import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const a = [1, 2, 3, 5, 2, 3, 1, 4, 3, 2, 6]
  const b = a.filter((el, ind) => a.indexOf(el) === ind)
  console.log(b)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your apll {b}</Text>
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
});
