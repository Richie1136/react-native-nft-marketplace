import { View, Text, Image } from 'react-native'
import { EthPrice } from '../subinfo/SubInfo'
import { SIZES, FONTS, COLORS } from '../../screens/constants'


const DetailsBid = ({ bid }) => {

  return (
    <View>
      <Image source={bid.image} resizeMode="contain" style={{ width: 48, height: 48 }} />
      <View>
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.small, color: COLORS.primary }}>Bid placed by {bid.name}</Text>
      </View>
    </View>
  )
}

export default DetailsBid