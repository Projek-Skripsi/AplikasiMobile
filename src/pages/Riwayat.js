import { View, Text, StyleSheet, Image, StatusBar, ScrollView, RefreshControl } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../components/Loading'
import { CONFIQ } from '../utils/datas'
import { getDataPemesananByUser } from '../confiqs/api'
import RiwayatList from '../components/RiwayatList'

const styles = StyleSheet.create({
  view: { backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, minHeight: '100%', paddingHorizontal: 20 }
})

export default function Riwayat () {
  const [authUser, setAuthUser] = useState(null)
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [riwayat, setRiwayat] = useState()

  async function getAuthUser () {
    const currentUser = await AsyncStorage.getItem(CONFIQ.authUser)
    setAuthUser(currentUser)
  }

  async function getPemesananByIdPengguna () {
    const { data } = await getDataPemesananByUser(authUser)
    setRiwayat(data)
  }

  useFocusEffect(
    useCallback(() => {
      setLoading(true)
      getAuthUser()
      getPemesananByIdPengguna()
      setLoading(false)
    }, [])
  )

  async function refreshPage () {
    setRefreshing(true)
    await getAuthUser()
    await getPemesananByIdPengguna()
    setRefreshing(false)
  }

  if (!authUser) {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <StatusBar backgroundColor={'blue'} barStyle="light-content" />
        <View style={[styles.view, { display: 'flex', alignItems: 'center', justifyContent: 'center' }]}>
          <Image source={require('../assests/NoAuth.png')} resizeMode='stretch' style={{ width: 300, height: 300 }} />
          <Text style={{ color: 'black' }}>Silahkan Login untuk melihat riwayat pemesanan Anda</Text>
        </View>
      </View>
    )
  }

  if (!riwayat) {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <StatusBar backgroundColor={'blue'} barStyle="light-content" />
        <Loading visible={loading} />
        <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, minHeight: '100%', paddingHorizontal: 20 }}>
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 30, fontWeight: 600, marginTop: 50, marginBottom: 30 }}>Riwayat Pemesanan</Text>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assests/Kosong.png')} style={{ width: 300, height: 300 }} />
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      <Loading visible={loading} />
      <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, minHeight: '100%', paddingHorizontal: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshPage} />} >
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 30, fontWeight: 600, marginTop: 50, marginBottom: 30 }}>Riwayat Pemesanan</Text>
          {riwayat.map((item) => (
            <RiwayatList key={item.IdPemesanan} riwayat={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
