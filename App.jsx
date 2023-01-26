import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox, Text, View } from 'react-native';
import { COLORS } from './constants/theme.js';
import { user } from './data/user.js';
export { user as profile } from './data/user.js';

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(['VirtualizedLists']);

//test
export default function App() {
  return (
    <View style={styles.container}>
      <Text> {user.name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
