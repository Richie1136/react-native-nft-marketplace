import { View, Text } from 'react-native'
import { useState } from 'react'

import { EthPrice, NFTTitle } from '../subinfo/SubInfo'
import { COLORS, SIZES, FONTS } from '../../screens/constants'

const DetailsDescription = ({ data }) => {

  const [first, setfirst] = useState("")


  return (
    <View>
      <Text>DetailsDescription</Text>
    </View>
  )
}

export default DetailsDescription