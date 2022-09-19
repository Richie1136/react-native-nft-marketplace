import { View, SafeArea, FlatList, Text, SafeAreaView } from "react-native"
import { useState } from 'react'

import { COLORS, NFTData } from "../constants"

import { NFTCard, FocusedStatusBar, HomeHeader } from "../../components"

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList keyExtractor={(item) => item.id}
            data={NFTData}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
            renderItem={({ item }) => <NFTCard data={item} />}
          />
        </View>
        <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: -1 }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home