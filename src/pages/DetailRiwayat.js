import { View, Text } from 'react-native'
import React from 'react'

export default function DetailRiwayat (props) {
  const IdPemesanan = props.route.params.idPemesanan
  return (
    <View>
      <Text style={{ color: 'black' }}>DetailRiwayat {IdPemesanan}</Text>
    </View>
  )
}
