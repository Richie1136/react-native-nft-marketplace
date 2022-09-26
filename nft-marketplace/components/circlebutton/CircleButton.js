import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../../screens/constants'


export const CircleButton = ({ imgUrl, handlePress, right, top }) => (
  <TouchableOpacity handlePress={handlePress} style={{ width: 40, height: 40, top, right, backgroundColor: COLORS.white, position: 'absolute', borderRadius: SIZES.extraLarge, alignItems: 'center', justifyContent: 'center', ...SHADOWS.light }}>
    <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
  </TouchableOpacity>
)

export const RectButton = ({ minWidth, fontSize, handlePress, top, right }) => (
  <TouchableOpacity onPress={handlePress} style={{ top, right, backgroundColor: COLORS.primary, padding: SIZES.small, borderRadius: SIZES.extraLarge, minWidth: minWidth }}>
    <Text style={{ fontFamily: FONTS.semiBold, fontSize: fontSize, color: COLORS.white, textAlign: 'center' }}>Place a bid</Text>
  </TouchableOpacity>
)