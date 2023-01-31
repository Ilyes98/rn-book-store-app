import { ScrollView, Text, View } from "react-native";
import { styles } from "../css/styles";
import BookSection from "./BookSection";

export function Body() {
    return (
    <View style={styles.body}>
       <ScrollView>
       <BookSection />
       
      <Text style={{
        color: 'white'
      }}>This is a body</Text>
      </ScrollView>
    </View>
    );
  }