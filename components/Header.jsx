import { Text, View } from "react-native";
import {  FONTS } from "../constants/theme";
import { styles } from "../css/styles";
import { user } from "../data/user";
import { ButtonHeader } from "./header/ButtonHeader";
import { UserInfos } from "./header/UserInfos";

export function Header() {
    return (
        <View style={styles.header}>
            <Text style={FONTS.h3}>Home</Text>
            <View style={styles.subHeader}>
                <UserInfos user={user} />
                <ButtonHeader user={user} />
            </View>
        </View>
    );
}