import { View } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'
import CategoryHeader from './category/CategoryHeader';
import CategoryData from './category/CategoryData';



export default function CategorySection() {

    return (
        <>
            <View style={{ marginTop: SIZES.padding }}>
                <View>
                    <CategoryHeader />
                </View>
                <View>
                    <CategoryData />
                </View>
            </View>
        </>
    )
}


