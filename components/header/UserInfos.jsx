import { Text, View,TouchableOpacity, Image } from "react-native";
import icons from "../../constants/icons";
import { COLORS, FONTS } from "../../constants/theme";
import { styles } from "../../css/styles";

export function UserInfos({user}) {
    return (
        <>
        <View style={styles.accountBox}>
            <Text style={FONTS.h3}>Good Morning</Text>
            <Text style={FONTS.h2}>{user.name}</Text>

        </View>
        <View style={styles.accountBox}>
            <TouchableOpacity style={styles.button}>
            <Image source={icons.plus_icon} style={styles.plusIcon} />

                <Text
                    style={[FONTS.body4,{color:COLORS.white}]}>
                     {user.point} points
                </Text>
            </TouchableOpacity>
        </View>
        </>
        );
}