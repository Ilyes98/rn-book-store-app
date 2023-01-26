import { View } from 'react-native';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { styles } from './css/styles';
import BookSection from './components/BookSection';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
  <BookSection />
  <Body />
  </View>
  );
}