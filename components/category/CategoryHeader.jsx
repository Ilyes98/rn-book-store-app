import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { COLORS, FONTS, SIZES } from "../../constants"
import { categoriesData } from "../../data/categories"

export default function CategoryHeader({selectedCategory, setSelectedCategory}) {


const renderItem = ({ item }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, marginRight: SIZES.padding }}
            onPress={() => setSelectedCategory(item.id)}
        >
            {
                selectedCategory == item.id &&
                <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
            }
            {
                selectedCategory != item.id &&
                <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
            }
        </TouchableOpacity>
    )
}

return (
    <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
        <FlatList
            data={categoriesData}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
        />
    </View>
)
}