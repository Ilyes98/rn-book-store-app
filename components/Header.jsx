import { Text, View } from "react-native";
import { styles } from "../css/styles";

export function Header() {
    return (
    <View style={styles.header}>
      <Text>This is a header</Text>
    </View>
    );
  }