import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Checkbox } from 'react-native-paper'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import { getDataKategoriKolam } from '../confiqs/api'
import Loading from '../components/Loading'
import BtnGoBack from '../components/BtnGoBack'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { currencyFormat } from '../utils/mataUang'

const styles = StyleSheet.create({
  Header: { marginTop: 50, marginBottom: 30 },
  subJudul: { color: 'black', fontSize: 18, fontWeight: 500 },
  btn_setTanggal: { display: 'flex', flexDirection: 'row', borderWidth: 0.5, borderColor: '#666666', borderRadius: 10, padding: 10, alignItems: 'center', gap: 5, marginVertical: 10 },
  cardKategori: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5, marginTop: 10, borderRadius: 10, backgroundColor: '#FAFAFA' },
  btnBottom: { position: 'absolute', bottom: 20, width: '100%', marginHorizontal: 20 },
  textBtn: { fontSize: 18, textAlign: 'center', fontWeight: 600 }
})

export default function DetailPemesanan ({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [kategoriKolam, setKategoriKolam] = useState([])
  const [tanggalMasuk, setTanggalMasuk] = useState(new Date())
  const [pemesanan, setPemesanan] = useState([])
  const [total, setTotal] = useState(0)
  const [checked, setChecked] = useState(false)
  const [modal, setModal] = useState(false)
  const hari = moment(tanggalMasuk).format('dddd')

  async function getKategori () {
    const { data } = await getDataKategoriKolam()
    setKategoriKolam(data)
  }

  useEffect(() => {
    setLoading(true)
    getKategori()
    setLoading(false)
  }, [])

  useEffect(() => {
    setTotal(pemesanan.reduce((x, y) => x + y.Harga * y.Qty, 0))
  }, [pemesanan])

  function onDateChange (value) {
    setModal(false)
    setTanggalMasuk(value)
  }

  function tambahQty (item) {
    const payload = {
      IdKategori: item.IdKategori,
      NamaKategori: item.NamaKategori,
      Harga: hari === 'Saturday' || hari === 'Sunday' ? item.HargaLibur : item.HargaNormal
    }

    const index = pemesanan.findIndex((obj) => obj.IdKategori === item.IdKategori)
    if (index === -1) {
      return setPemesanan([...pemesanan, { ...payload, Qty: 1 }])
    }
    else {
      return setPemesanan(details => details.map((detail) => detail.IdKategori === item.IdKategori ? { ...detail, Qty: detail.Qty + 1 } : { ...detail }))
    }
  }

  function kurangQty (item) {
    const index = pemesanan.findIndex((obj) => obj.IdKategori === item.IdKategori)
    if (index !== -1) {
      if (pemesanan[index].Qty === 1) {
        return setPemesanan(details => details.filter((detail) => detail.IdKategori !== item.IdKategori))
      }
      else {
        return setPemesanan(details => details.map((detail) => detail.IdKategori === item.IdKategori ? { ...detail, Qty: detail.Qty - 1 } : { ...detail }))
      }
    }
  }

  function qty (item) {
    const index = pemesanan.findIndex((obj) => obj.IdKategori === item.IdKategori)
    if (index !== -1) {
      return pemesanan[index].Qty
    }
    else {
      return 0
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      <Loading visible={loading} />
      <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, minHeight: '100%', paddingHorizontal: 20 }}>
        <View style={styles.Header}>
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 30, fontWeight: 600 }}>Detail Pemesanan</Text>
          <BtnGoBack />
        </View>
      <Text style={styles.subJudul}>Tanggal Berenang</Text>
      <TouchableOpacity onPress={() => setModal(true)} style={styles.btn_setTanggal} >
        <MCI name='calendar-month-outline' size={22} color='#666666' />
        <Text style={{ color: '#666666' }} >{moment(tanggalMasuk).format('DD MMM YYYY')}</Text>
      </TouchableOpacity>
      <DatePicker title='Pilih Tanggal Berenang' mode='date'
        modal
        open={modal}
        date={tanggalMasuk}
        minimumDate={new Date()}
        onConfirm={ (value) => onDateChange(value) }
        onCancel={() => setModal(false)}
      />
      <Text style={[styles.subJudul, { marginTop: 10 }] }>Jumlah Tiket</Text>
      {kategoriKolam.map((item) => (
        <View key={item.IdKategori} style={styles.cardKategori} >
          <View>
            <Text style={{ color: 'black', fontSize: 18 }}>{item.NamaKategori}</Text>
            <Text style={{ color: '#666666' }}>{hari === 'Saturday' || hari === 'Sunday' ? currencyFormat(item.HargaLibur) : currencyFormat(item.HargaNormal) }/orang</Text>
          </View>
          {/* plus min qty =v */}
          <View style={{ display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => kurangQty(item)} activeOpacity={0.5} >
              <MCI name='minus-circle-outline' size={25} color='black' />
            </TouchableOpacity>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }} >{qty(item)}</Text>
            <TouchableOpacity onPress={() => tambahQty(item)} activeOpacity={0.5} >
              <MCI name='plus-circle-outline' size={25} color='black' />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.subJudul}>Total Harga</Text>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 800 }}>{currencyFormat(total)}</Text>
      </View>
      <View style={styles.btnBottom}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked) }} color='#106AF0' />
          <Text style={{ color: 'black', fontSize: 15 }}>Saya menyetujui <Text style={{ color: '#106AF0', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Peraturan')}>Peraturan</Text> yang berlaku</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Pembayaran', { Pemesanan: { TanggalMasuk: moment(tanggalMasuk).format('YYYY-MM-DD'), Total: total, detail: pemesanan } })} disabled={!checked || !total} style={[{ borderRadius: 50, padding: 10 }, !checked || !total ? { backgroundColor: '#DDDDDD' } : { backgroundColor: '#106AF0' }]} activeOpacity={0.5}>
          <Text style={[styles.textBtn, { color: 'white' }]}>Lanjutkan</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}
