import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.black,
      paddingTop: 10,
    },
    header: {
      height: 200,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  