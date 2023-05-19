import { View, Text, StatusBar, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CONFIQ } from '../utils/datas'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getDataPengguna, logout } from '../confiqs/api'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Profil from '../components/Profil'
import Loading from '../components/Loading'

const styles = StyleSheet.create({
  btn_NoUser: { borderWidth: 2, borderColor: '#106AF0', alignItems: 'center', borderRadius: 20, width: 150 },
  textBtn_NoUser: { color: '#106Af0', paddingVertical: 5, fontWeight: 600, fontSize: 20 },
  btn_menu: { borderBottomWidth: 1, borderBottomColor: '#666666', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10 },
  textBtn_menu: { color: 'black', fontSize: 18, marginLeft: 10 }
})

export default function Akun ({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [authUser, setAuthUser] = useState(null)
  const [pengguna, setPengguna] = useState([])

  async function getAuthUser () {
    const currentUser = await AsyncStorage.getItem(CONFIQ.authUser)
    if (currentUser) {
      const { data } = await getDataPengguna(currentUser)
      setPengguna(data[0])
    }
    setAuthUser(currentUser)
  }

  useEffect(() => {
    setLoading(true)
    getAuthUser()
    setLoading(false)
  }, [])

  async function onLogout () {
    setLoading(true)
    const { error } = await logout()
    if (!error) {
      await AsyncStorage.removeItem(CONFIQ.authUser)
      // setAuthUser(null)
      navigation.replace('Beranda')
    }
    setLoading(false)
  }

  function logoutHandler () {
    Alert.alert('Info', 'Yakin ingin keluar?', [
      {
        text: 'Batal',
        style: 'cancel'
      },
      {
        text: 'Yakin',
        onPress: () => onLogout()
      }
    ])
  }

  function NoUser () {
    return (
      <View>
        <Loading visible={loading} />
        <Text style={{ color: '#666666', textAlign: 'center' }}>Silahkan Login terlebih dahulu</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn_NoUser}>
            <Text style={styles.textBtn_NoUser}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Daftar')} style={styles.btn_NoUser}>
            <Text style={styles.textBtn_NoUser}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function MenuEditProfile () {
    return (
      <TouchableOpacity style={styles.btn_menu} activeOpacity={0.5}>
        <Ionicons name={'person-circle-outline'} size={24} color={'black'} />
        <Text style={styles.textBtn_menu}>Edit Profil</Text>
      </TouchableOpacity>
    )
  }

  function MenuKeluar () {
    return (
      <TouchableOpacity onPress={logoutHandler} style={{ position: 'absolute', bottom: 10, width: '100%', marginHorizontal: 20, borderWidth: 1, borderColor: 'red', borderRadius: 50, padding: 10 }} activeOpacity={0.5}>
        <Text style={{ color: 'red', fontSize: 18, textAlign: 'center', fontWeight: 600 }}>Keluar</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, minHeight: '100%', paddingHorizontal: 20 }}>
        <View style={{ marginTop: 20 }}>
          { authUser ? <Profil User={pengguna} /> : <NoUser /> }
        </View>
        <View style={{ marginTop: 20 }}>
          { authUser ? <MenuEditProfile /> : ''}
          <TouchableOpacity style={styles.btn_menu} activeOpacity={0.5} onPress={() => navigation.navigate('TentangKami')}>
            <Ionicons name={'business-outline'} size={24} color={'black'} />
            <Text style={styles.textBtn_menu}>Tentang Kami</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_menu} activeOpacity={0.5} onPress={() => navigation.navigate('Peraturan')}>
            <Ionicons name={'document-text-outline'} size={24} color={'black'} />
            <Text style={styles.textBtn_menu}>Peraturan Kolam Renang</Text>
          </TouchableOpacity>
        </View>
        { authUser ? <MenuKeluar /> : ''}
      </View>
    </View>
  )
}
