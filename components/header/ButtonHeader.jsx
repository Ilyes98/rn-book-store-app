import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { LineDivider } from "../shared/LineDivider";

export function ButtonHeader({ user }) {
    return (

        <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding ,marginTop : -20}}>
            <View style={{ flexDirection: 'row', height: 70,  backgroundColor: COLORS.gray, borderRadius: SIZES.radius }}>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Claim")}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={icons.claim_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Claim</Text>
                    </View>
                </TouchableOpacity>

                <LineDivider />

                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("Get Point")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.point_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Get Point</Text>
                    </View>
                </TouchableOpacity>

                <LineDivider />

                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => console.log("My Card")}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.card_icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>My Card</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}