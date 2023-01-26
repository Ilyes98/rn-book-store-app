import { Text, View } from "react-native";
import { styles } from "../css/styles";

export function Body() {
    return (
    <View style={styles.body}>
      <Text style={{
        color: 'white'
      }}>This is a body</Text>
    </View>
    );
  }