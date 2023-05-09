import { View, Text } from 'react-native'
import React from 'react'
// import { Avatar } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function RatingList ({ rating }) {
  return (
    <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#666666', padding: 5, marginHorizontal: 20 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>{/* avatar */}
                  <Text style={{ color: 'black' }}>Avatar</Text>
                </View>
                <View>{/* nama dan tanggal */}
                  <Text style={{ color: 'black' }}>Nama</Text>
                  <Text style={{ color: 'black' }}>TanggalUpload</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                { [...Array(rating.Bintang)].map((bintang, index) => {
                  return <FontAwesome key={index} name={'star'} size={20} color={'#F4BF35'} />
                }) }
            </View>
        </View>
        {rating.Ulasan ? <Text style={{ color: 'black', minHeight: 50, textAlignVertical: 'center' }}>{rating.Ulasan}</Text> : '' }
    </View>
  )
}
