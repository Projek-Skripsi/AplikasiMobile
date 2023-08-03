import { View, Text, ScrollView, StatusBar, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper'
import { getAllDataPemesanan, getAllDataPembayaran, addPemesanan } from '../confiqs/api'
import { currencyFormat } from '../utils/mataUang'
import Loading from '../components/Loading'
import BtnGoBack from '../components/BtnGoBack'
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CONFIQ } from '../utils/datas'

const styles = StyleSheet.create({
  Header: { marginTop: 50, marginBottom: 30 },
  subJudul: { color: 'black', fontSize: 18, fontWeight: 500 },
  card: { display: 'flex', flexDirection: 'row', borderWidth: 1, marginTop: 15, padding: 15, borderColor: '#666666', borderRadius: 20 },
  btn: { position: 'absolute', bottom: 0, marginVertical: 20, marginHorizontal: 20, width: '100%', borderRadius: 50, padding: 10, backgroundColor: '#106AF0' },
  textBtn: { color: 'white', fontSize: 18, textAlign: 'center', fontWeight: 600 }
})

export default function Pembayaran (props) {
  const pemesanan = props.route.params.Pemesanan
  const [loading, setLoading] = useState(false)
  const [idPemesanan, setIdPemesanan] = useState(0)
  const [authUser, setAuthUser] = useState()
  const [pembayaran, setPembayaran] = useState([])
  const [idPembayaran, setIdPembayaran] = useState(0)

  async function createIdPemesanan () {
    const { data } = await getAllDataPemesanan()
    setIdPemesanan(data.length + 1)
  }

  async function getAuthUser () {
    const currentUser = await AsyncStorage.getItem(CONFIQ.authUser)
    setAuthUser(currentUser)
  }

  async function getPembayaran () {
    const { data } = await getAllDataPembayaran()
    setPembayaran(data.filter(item => item.Status === 'Aktif'))
  }

  useEffect(() => {
    setLoading(true)
    getAuthUser()
    getPembayaran()
    createIdPemesanan()
    setLoading(false)
  }, [])

  function onCreatePemesanan () {
    Alert.alert('Konfirmasi Pemesanan', 'Yakin pemesanan telah sesuai?', [
      {
        text: 'Batal',
        style: 'cancel'
      },
      {
        text: 'Yakin',
        onPress: async () => {
          setLoading(true)
          try {
            const payload = {
              IdPemesanan: idPemesanan,
              IdPengguna: authUser,
              TanggalPemesanan: moment().format('YYYY-MM-DD hh:mm:ss'),
              TanggalMasuk: pemesanan.TanggalMasuk,
              Total: pemesanan.Total,
              IdPembayaran: idPembayaran,
              Status: 'Menunggu Pembayaran',
              detail: pemesanan.detail
            }
            await addPemesanan(payload)
            Alert.alert('Berhasil', 'Lihat pemesanan dan upload bukti pembayaran Anda pada halaman riwayat!')
            props.navigation.replace('DetailRiwayat', { idPemesanan })
          } catch {
            throw Error('error')
          }
          setLoading(false)
        }
      }
    ])
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      <Loading visible={loading} />
      <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, minHeight: '100%', paddingHorizontal: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.Header}>
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 30, fontWeight: 600 }}>Metode Pembayaran</Text>
            <BtnGoBack />
          </View>
          {/* RINCIAN PEMESANAN */}
          <View style={{ marginBottom: 30, borderWidth: 1, borderRadius: 10, padding: 10, borderColor: 'green', backgroundColor: '#E5FCE1', elevation: 3 }}>
            <Text style={[styles.subJudul, { marginBottom: 10 }]}>Rincian Pemesanan</Text>
            <View style={{ marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: 'black', fontWeight: 500 }}>Tanggal Masuk</Text>
              <Text style={{ color: 'black', fontWeight: 400 }}>{moment(pemesanan.TanggalMasuk).format('DD MMM YYYY')}</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'black', fontWeight: 500 }}>Tiket</Text>
              {pemesanan.detail.map((item, index) => (
                  <View key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'black', fontWeight: 400 }}>{`Tiket ${item.NamaKategori} = ${item.Qty} x ${currencyFormat(item.Harga)}`}</Text>
                      <Text style={{ color: 'black', fontWeight: 400 }}>{currencyFormat(item.Harga * item.Qty)}</Text>
                  </View>
              ))}
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: 'black', fontWeight: 500 }}>Total</Text>
              <Text style={{ color: 'black', fontWeight: 400 }}>{currencyFormat(pemesanan.Total)}</Text>
            </View>
          </View>
          {/* PILIH METODE PEMBAYARAN */}
          <Text style={styles.subJudul}>Pilih metode pembayaran</Text>
          {pembayaran.map((item) => (
            <TouchableOpacity onPress={() => setIdPembayaran(item.IdPembayaran)} activeOpacity={0.5} key={item.IdPembayaran} style={[styles.card, idPembayaran === item.IdPembayaran && { borderColor: '#106AF0' }]}>
                <RadioButton status={idPembayaran === item.IdPembayaran ? 'checked' : 'unchecked'} onPress={() => setIdPembayaran(item.IdPembayaran)} color='#106AF0' />
                <View>
                    <Text style={{ color: 'black', fontWeight: 600, fontSize: 20, marginTop: 5 }}>{item.NamaPembayaran}</Text>
                    {idPembayaran === item.IdPembayaran &&
                      <>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 600, marginTop: 10 }}>{item.NoRekening}</Text>
                        <Text style={{ color: '#666666' }}>A/N {item.An}</Text>
                      </>
                    }
                </View>
            </TouchableOpacity>
          ))}
          <View style={{ minHeight: 80 }} />
        </ScrollView>
        {idPembayaran !== 0 &&
          <TouchableOpacity onPress={() => onCreatePemesanan()} style={styles.btn} activeOpacity={0.5}>
            <Text style={[styles.textBtn]}>Simpan dan Bayar</Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}
