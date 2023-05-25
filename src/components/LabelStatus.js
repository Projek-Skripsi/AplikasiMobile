import { Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  label: { color: 'black', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 50 }
})

export default function LabelStatus ({ status }) {
  switch (status) {
    case 'Menunggu Pembayaran':
      return <Text style={[styles.label, { backgroundColor: '#75B2D4' }]}>Menunggu Pembayaran</Text>
    case 'Menunggu Konfirmasi':
      return <Text style={[styles.label, { backgroundColor: '#ECC995' }]}>Menunggu Konfirmasi</Text>
    case 'Berhasil':
      return <Text style={[styles.label, { backgroundColor: '#75DB7F' }]}>Berhasil</Text>
    case 'Selesai':
      return <Text style={[styles.label, { backgroundColor: '#1CAAFA', color: 'white' }]}>Selesai</Text>
    case 'Batal':
      return <Text style={[styles.label, { backgroundColor: '#EA7D7D' }]}>Batal</Text>
    default:
      break
  }
}
