import { View, SafeArea, FlatList, Text, SafeAreaView } from "react-native"
import { useState } from 'react'

import { COLORS, NFTData } from "../constants"

import { NFTCard, FocusedStatusBar, HomeHeader } from "../../components"

const Home = () => {

  const [nftData, setNftData] = useState(NFTData)

  const handleSearch = (value) => {
    if (value.length === 0) return setNftData(NFTData)

    const filterData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    if (filterData.length > 0) {
      setNftData(filterData)
    } else {
      setNftData(NFTData)
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList keyExtractor={(item) => item.id}
            data={nftData}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
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