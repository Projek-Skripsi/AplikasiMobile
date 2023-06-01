import { View, Text, StyleSheet, StatusBar, RefreshControl, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from 'react-native-paper'
import Loading from '../components/Loading'
import moment from 'moment'
import { getDataKategoriKolam, getDataKolam, getDataRating, getDataCarousel, getDataJumlahPengunjung } from '../confiqs/api'
import { currencyFormat } from '../utils/mataUang'
import Carousel from '../components/Carousel'
import Kolam from '../components/Kolam'
import RatingList from '../components/RatingList'
import { CONFIQ } from '../utils/datas'

const styles = StyleSheet.create({
  welcomeText: { color: 'white', fontFamily: 'Inter', fontSize: 25, textAlign: 'center', marginTop: 15, width: '80%' },
  pengunjungText: { marginVertical: 20, color: 'white', fontSize: 16 },
  carousel: { overflow: 'hidden', padding: 20, paddingBottom: 0 },
  menu: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  menu_judul: { color: 'black', fontSize: 20, fontWeight: 700, paddingHorizontal: 20 },
  btn_pesan: { position: 'absolute', bottom: 0, alignItems: 'center', backgroundColor: '#106AF0', marginVertical: 20, marginHorizontal: '20%', width: '60%', borderRadius: 50 }
})

export default function Beranda ({ navigation }) {
  const [authUser, setAuthUser] = useState(null)
  const [carousel, setCarousel] = useState([])
  const [kategoriKolam, setKategoriKolam] = useState([])
  const [kolam, setKolam] = useState([])
  const [rating, setRating] = useState([])
  const [jmlhPengunjung, setJmlhPengunjung] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false)
  const hari = moment().format('dddd')

  async function getAuthUser () {
    const currentUser = await AsyncStorage.getItem(CONFIQ.authUser)
    setAuthUser(currentUser)
  }

  async function getKategori () {
    const { data } = await getDataKategoriKolam()
    setKategoriKolam(data)
  }

  async function getKolam () {
    const { data } = await getDataKolam()
    setKolam(data)
  }

  async function getRating () {
    const { data } = await getDataRating()
    setRating(data)
  }

  async function getCarousel () {
    const { data } = await getDataCarousel()
    setCarousel(data)
  }

  async function getJumlahPengunjung () {
    const hariIni = moment().format('YYYY-MM-DD')
    const { data } = await getDataJumlahPengunjung(hariIni)
    setJmlhPengunjung(data[0].pengunjungHariIni)
  }

  useFocusEffect(
    useCallback(() => {
      setLoading(true)
      getCarousel()
      getKategori()
      getKolam()
      getRating()
      getJumlahPengunjung()
      getAuthUser()
      setLoading(false)
    }, [])
  )

  async function refreshPage () {
    setRefreshing(true)
    await getCarousel()
    await getKategori()
    await getKolam()
    await getRating()
    await getJumlahPengunjung()
    await getAuthUser()
    setRefreshing(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <Loading visible={loading} />
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshPage} />} >
        <StatusBar backgroundColor={'blue'} barStyle="light-content" />
        <View style={{ backgroundColor: 'blue' }}>
          <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Text style={styles.welcomeText}>Selamat Datang di Kolam Renang Sejahtera</Text>
            <Text style={styles.pengunjungText}>Perkiraan pengunjung hari ini : {jmlhPengunjung !== null ? jmlhPengunjung : '0'} orang</Text>
          </View>
          <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20 }}>
            <View style={styles.carousel}>
              <Carousel dataCarousel={carousel}/>
            </View>
            {kategoriKolam.map((item, index) => (
              <View key={index} style={{ marginBottom: 5 }}>
                <View style={styles.menu}>
                  <Text style={styles.menu_judul}>Kolam {item.NamaKategori}</Text>
                  <Text style={styles.menu_judul}>{hari === 'Saturday' || hari === 'Sunday' ? currencyFormat(item.HargaLibur) : currencyFormat(item.HargaNormal) }</Text>
                </View>
                <Kolam dataKolam={kolam.filter((kolam) => kolam.IdKategori === item.IdKategori)} />
              </View>
            ))}
            <View>
              <View style={[styles.menu, { alignItems: 'center' }]}>
                <Text style={styles.menu_judul}>Ulasan</Text>
                <Button textColor='#666666' onPress={() => navigation.navigate('Rating', { AllRating: rating })} >Lihat Semua</Button>
              </View>
              {rating.map((item, index) => (
                index <= 4 ? <RatingList key={item.IdRating} rating={item} /> : ''
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      {authUser &&
        <TouchableOpacity onPress={() => navigation.navigate('DetailPemesanan')} activeOpacity={0.9} style={styles.btn_pesan}>
          <Text style={{ color: 'white', fontSize: 25, paddingVertical: 10 }}>Beli Tiket</Text>
        </TouchableOpacity>
      }
    </View>
  )
}
