import { ScrollView, Text, View } from "react-native";
import { styles } from "../css/styles";
import BookSection from "./BookSection";
import CategorySection from "./CategorySection";

export function Body() {
    return (
    <View style={styles.body}>
       <ScrollView>
       <BookSection />
       <CategorySection />
      </ScrollView>
    </View>
    );
  }