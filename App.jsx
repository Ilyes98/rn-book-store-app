import { StatusBar } from 'expo-status-bar';
import { StyleSheet, LogBox, Text, View } from 'react-native';
import { Body } from './components/Body';
import { Header } from './components/Header';
import { COLORS } from './constants/theme';
import { styles } from './css/styles';

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(['VirtualizedLists']);

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
}

