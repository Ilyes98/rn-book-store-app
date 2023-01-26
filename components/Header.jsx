import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../constants/icons";
import { COLORS, FONTS } from "../constants/theme";
import { styles } from "../css/styles";
import { user } from "../data/user";
import { UserInfos } from "./UserInfos";

export function Header() {
    return (
        <View style={styles.header}>
            <Text style={FONTS.h3}>Home</Text>
            <View style={styles.subHeader}>
                <UserInfos user={user} />
            </View>
        </View>
    );
}