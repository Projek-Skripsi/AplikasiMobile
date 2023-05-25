import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import LabelStatus from './LabelStatus'
import { currencyFormat } from '../utils/mataUang'
import BtnRating from './BtnRating'

const styles = StyleSheet.create({
  btn_detail: { borderWidth: 1, borderColor: '#DDDDDD', marginBottom: 10, borderRadius: 15, padding: 10 },
  subJudul: { color: '#666666' }
})

export default function RiwayatList ({ riwayat }) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailRiwayat', { idPemesanan: riwayat.IdPemesanan })} style={styles.btn_detail} activeOpacity={0.3}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
        <Text style={{ color: '#666666', fontSize: 18, fontWeight: 800 }}>#{riwayat.IdPemesanan}</Text>
        <LabelStatus status={riwayat.Status} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.subJudul}>Tanggal Masuk</Text>
        <Text style={{ color: 'black', fontWeight: 500 }}>{moment(riwayat.TanggalMasuk).format('DD MMM YYYY')}</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.subJudul}>Tiket</Text>
        {riwayat.detail.map((item, index) => (
            <View key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'black', fontWeight: 500 }}>{`Tiket ${item.NamaKategori} = ${item.Qty} x ${currencyFormat(item.Harga)}`}</Text>
                <Text style={{ color: 'black', fontWeight: 500 }}>{currencyFormat(item.Harga * item.Qty)}</Text>
            </View>
        ))}
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.subJudul}>Total</Text>
        <Text style={{ color: 'black', fontWeight: 700, fontSize: 18 }}>{currencyFormat(riwayat.Total)}</Text>
      </View>
      {riwayat.Status === 'Selesai' && riwayat.IdRating === null ? <BtnRating IdPemesanan={riwayat.IdPemesanan} /> : '' }
    </TouchableOpacity>
  )
}
