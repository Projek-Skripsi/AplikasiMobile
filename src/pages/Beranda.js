import { View, Text, StyleSheet, StatusBar, RefreshControl, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import moment from 'moment'
import { carousel, kategoriKolam, kolam, rating } from '../utils/datas'
import { currencyFormat } from '../utils/mataUang'
import Carousel from '../components/Carousel'
import Kolam from '../components/Kolam'
import RatingList from '../components/RatingList'

const styles = StyleSheet.create({
  welcomeText: { color: 'white', fontFamily: 'Inter', fontSize: 25, textAlign: 'center', marginTop: 15, width: '80%' },
  pengunjungText: { marginVertical: 20, color: 'white', fontSize: 16 },
  carousel: { overflow: 'hidden', padding: 20, paddingBottom: 0 },
  menu: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  menu_judul: { color: 'black', fontSize: 20, fontWeight: 700, paddingHorizontal: 20 },
  btn_pesan: { position: 'absolute', bottom: 0, alignItems: 'center', backgroundColor: '#106AF0', marginVertical: 20, marginHorizontal: '20%', width: '60%', borderRadius: 50 }
})

export default function Beranda ({ navigation }) {
  const [getCarousel, setGetCarousel] = useState([])
  const [getKategoriKolam, setGetkategoriKolam] = useState([])
  const [getKolam, setGetKolam] = useState([])
  const [getRating, setGetRating] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const hari = moment().format('dddd')

  useEffect(() => {
    setGetCarousel(carousel)
    setGetkategoriKolam(kategoriKolam)
    setGetKolam(kolam)
    setGetRating(rating)
  }, [])

  function refreshPage () {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshPage} />} >
        <StatusBar backgroundColor={'#106AF0'} barStyle="ligt-content" />
        <View style={{ backgroundColor: '#106AF0' }}>
          <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Text style={styles.welcomeText}>Selamat Datang di Kolam Renang Sejahtera</Text>
            <Text style={styles.pengunjungText}>Perkiraan pengunjung hari ini : 120 orang</Text>
          </View>
          <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20 }}>
            <View style={styles.carousel}>
              <Carousel dataCarousel={getCarousel}/>
            </View>
            {getKategoriKolam.map((item, index) => (
              <View key={index}>
                <View style={styles.menu}>
                  <Text style={styles.menu_judul}>Kolam {item.NamaKategori}</Text>
                  <Text style={styles.menu_judul}>{hari === 'Saturday' || hari === 'Sunday' ? currencyFormat(item.HargaLibur) : currencyFormat(item.HargaNormal) }</Text>
                </View>
                <Kolam dataKolam={getKolam.filter((kolam) => kolam.IdKategori === item.IdKategori)} />
              </View>
            ))}
            <View>
              <View style={[styles.menu, { alignItems: 'center' }]}>
                <Text style={styles.menu_judul}>Ulasan</Text>
                <Button textColor='#666666' onPress={() => navigation.navigate('Rating')} >Lihat Semua</Button>
              </View>
              {getRating.map((item) => (
                <RatingList key={item.IdRating} rating={item} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.9} style={styles.btn_pesan}>
        <Text style={{ color: 'white', fontSize: 25, paddingVertical: 10 }}>Beli Tiket</Text>
      </TouchableOpacity>
    </View>
  )
}
