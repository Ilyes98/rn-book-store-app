import { View } from 'react-native';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { styles } from './css/styles';
import { useFonts } from 'expo-font';

export default function App() {

  const [loadFonts] = useFonts({
    "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
  })
  if (!loadFonts) return null;
  
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
}