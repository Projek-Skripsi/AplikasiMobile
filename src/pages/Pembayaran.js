import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pembayaran (props, { navigation }) {
  const [pemesanan, setPemesanan] = useState(props.route.params.Pemesanan)

  useEffect(() => {
    console.log(pemesanan)
  }, [])
  return (
    <View>
      <Text style={{ color: 'black' }}>Pembayaran</Text>
    </View>
  )
}
