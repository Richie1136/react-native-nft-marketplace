import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../../screens/constants'


export const CircleButton = ({ imgUrl, handlePress, right, top }) => {
  return (
    <TouchableOpacity handlePress={handlePress} style={{ width: 40, height: 40, top, right, backgroundColor: COLORS.white, position: 'absolute', borderRadius: SIZES.extraLarge, alignItems: 'center', justifyContent: 'center', ...SHADOWS.light }}>
      <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  )
}