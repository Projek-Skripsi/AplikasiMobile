import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Profil ({ User }) {
  return (
    <View key={User.IdPengguna} style= {{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: User.UrlGambar }} style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode='stretch' />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: 'black', fontWeight: 700, fontSize: 30 }}>{User.Nama}</Text>
        <Text style={{ color: '#666666', fontSize: 18 }}>{User.Email}</Text>
      </View>
    </View>
  )
}
