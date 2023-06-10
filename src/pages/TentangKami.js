import { View, Text, StatusBar, ScrollView, StyleSheet, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getDataPerusahaan } from '../confiqs/api'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Loading from '../components/Loading'
import BtnGoBack from '../components/BtnGoBack'

const styles = StyleSheet.create({
  text: { color: '#666666', fontSize: 18, textAlign: 'justify' },
  kontak: { color: '#106AF0', fontSize: 18, textAlign: 'justify', marginVertical: 5 },
  Header: { marginTop: 50, marginBottom: 30 }
})

export default function TentangKami () {
  const [perusahaan, setPerusahaan] = useState()
  const [loading, setLoading] = useState(false)

  async function getPerusahaan () {
    const { data } = await getDataPerusahaan()
    setPerusahaan(data)
  }

  useEffect(() => {
    setLoading(true)
    getPerusahaan()
    setLoading(false)
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <StatusBar backgroundColor={'blue'} barStyle="light-content" />
        <Loading visible={loading} />
        <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, paddingHorizontal: 20, minHeight: '100%' }}>
          <View style={styles.Header}>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 30, fontWeight: 600 }}>Tentang Kami</Text>
            <BtnGoBack />
          </View>
          <ScrollView showsVerticalScrollIndicator={false} >
            {perusahaan && perusahaan.map((item) => (
              <View key={item.IdPerusahaan} >
                  <Text style={{ color: 'black', fontSize: 25, fontWeight: 600, marginTop: 20 }}>{item.NamaPerusahaan}</Text>
                  <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 600, marginBottom: 10 }}>Deskripsi</Text>
                    <Text style={styles.text}>{item.Deskripsi}</Text>
                    <Text style={[styles.text, { marginTop: 10 }] }>Lokasi kolam renang: {item.Alamat}</Text>
                    <Text style={[styles.text, { marginTop: 10 }] }>Jam operasional Kolam: {item.JamBuka} - {item.JamTutup}</Text>
                  </View>
                  <View style={{ marginVertical: 20 }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 600, marginBottom: 10 }}>Hubungi Kami</Text>
                    {item.Email ? <Text style={styles.kontak}onPress={() => Linking.openURL(`mailto:${item.Email}`)}><MCI name='gmail' size={18} color='#106AF0'/> E-Mail</Text> : '' }
                    {item.NoWA ? <Text style={styles.kontak} onPress={() => Linking.openURL(`https://wa.me/${item.NoWA}/`)}><MCI name='whatsapp' size={18} color='#106AF0'/> WhatsApp</Text> : '' }
                    {item.Instagram ? <Text style={styles.kontak} onPress={() => Linking.openURL(`https://www.instagram.com/${item.Instagram}/`)}><MCI name='instagram' size={18} color='#106AF0'/> Instagram</Text> : '' }
                  </View>
              </View>
            ))}
          </ScrollView>
        </View>
    </View>
  )
}
