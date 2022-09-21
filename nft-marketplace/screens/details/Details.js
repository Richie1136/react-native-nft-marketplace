import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native"

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants"

import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDescription, DetailsBid } from "../../components"

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image resizeMode="cover" source={data.image} style={{ width: '100%', height: '100%' }} />
  </View>
)


const Details = ({ route, navigation }) => {

  const { data } = route.params


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <View style={{ width: '100%', position: 'absolute', bottom: 0, paddingVertical: SIZES.font, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.5)', zIndex: 1 }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList ListHeaderComponent={() => (
        <>
          <DetailsHeader data={data} navigation={navigation} />
        </>
      )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />} />
    </SafeAreaView>
  )
}

export default Details