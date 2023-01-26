import {
  StyleSheet
} from "react-native";
import {
  COLORS
} from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: 10,
  },
  header: {
    height: 200,
    backgroundColor: COLORS.primary,
    paddingTop: 40,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
  },
  subHeader: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  accountBox: {
    width: '50%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    flexDirection: 'row',
  },
  plusIcon: {
    width: 25,
    height: 25,
    opacity: 0.7,
    backgroundColor: COLORS.gray1,
    marginRight: 5,
    borderRadius: 15,
    resizeMode: 'cover',
  }
});