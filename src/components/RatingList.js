import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function RatingList ({ rating }) {
  const kategoriRating = rating.KategoriRating.split(',')
  console.log(kategoriRating)

  function ShowKategori () {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, marginBottom: 5 }}>
        {kategoriRating.map((item, index) => (
          <Text key={index} style={{ color: '#106AF0', borderColor: '#106AF0', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10 }}>{item}</Text>
        ))}
      </View>
    )
  }

  return (
    <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#666666', paddingHorizontal: 5, paddingVertical: 15, marginHorizontal: 20 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5 }}>
          <View>{/* avatar */}
          <Image source={{ uri: rating.UrlGambar }} style={{ width: 40, height: 40, borderRadius: 50 }} resizeMode='stretch' />
          </View>
          <View>{/* nama dan tanggal */}
            <Text style={{ color: 'black' }}>{rating.Nama}</Text>
            <Text style={{ color: '#666666' }}>({moment(rating.TanggalUpload).format('DD MMM YYYY')})</Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          { [...Array(rating.Bintang)].map((bintang, index) => {
            return <FontAwesome key={index} name={'star'} size={20} color={'#F4BF35'} />
          }) }
        </View>
      </View>
      {kategoriRating[0] !== '' && <ShowKategori /> }
      {rating.Ulasan ? <Text style={{ color: 'black', textAlign: 'justify', textAlignVertical: 'center' }}>{rating.Ulasan}</Text> : '' }
    </View>
  )
}
