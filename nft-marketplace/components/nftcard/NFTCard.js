import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CircleButton } from '../circlebutton/CircleButton'

import { COLORS, SIZES, SHADOWS, assets } from '../../screens/constants'


const NFTCard = ({ data }) => {

  console.log(data)

  const navigation = useNavigation()




  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: '100%', height: 250 }}>
        <Image source={data.image} resizeMode="cover" style={{ width: '100%', height: '100%', borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font }} />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <Text>NFTCard</Text>
    </View>
  )
}

export default NFTCard