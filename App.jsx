import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox, Text, View } from 'react-native';
import { COLORS } from './constants/theme';

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(['VirtualizedLists']);


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
