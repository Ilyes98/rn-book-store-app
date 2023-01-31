import { View } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'
import CategoryHeader from './category/CategoryHeader';
import CategoryData from './category/CategoryData';



export default function CategorySection() {
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    return (
        <>
            <View style={{ marginTop: SIZES.padding }}>
                <View>
                    <CategoryHeader selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                    />
                </View>
                <View>
                    <CategoryData selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                </View>
            </View>
        </>
    )
}


