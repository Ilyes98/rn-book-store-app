import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import icons, { clock_icon, page_icon } from '../constants/icons'
import { COLORS, FONTS, SIZES } from '../constants'

export default function Book({index,item}) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginLeft: index == 0 ? SIZES.padding : 0,
        marginRight: SIZES.radius
      }}
    >
      <Image
        source={item.bookCover}
        resizeMode="cover"
        style={{
          width: 180,
          height: 250,
          borderRadius: 20
        }}
      />
      <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={icons.clock_icon}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.lightGray
          }}
        />
        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>

        <Image
          source={icons.page_icon}
          style={{
            marginLeft: SIZES.radius,
            width: 20,
            height: 20,
            tintColor: COLORS.lightGray
          }}
        />
        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
      </View>
    </TouchableOpacity>
  )
}

