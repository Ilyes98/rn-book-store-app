import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { myBooks } from '../data/myBooks'
import Book from './Book'
import { COLORS, FONTS, SIZES } from '../constants'
import { books } from '../data'

export default function BookSection() {
  return (
    <View style={{ flex: 1 }}>
    {/* Header */}
    <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>

        <TouchableOpacity
            onPress={() => console.log("See More")}
        >
            <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>see more</Text>
        </TouchableOpacity>
    </View>

    {/* Books */}
    <View style={{ flex: 1, marginTop: SIZES.padding }}>
        <FlatList
            data={myBooks}
            renderItem={Book}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
</View>
  )
}

const styles = StyleSheet.create({
  container: {},
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    color: 'white',
  },
})