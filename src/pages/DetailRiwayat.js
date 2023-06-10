import { View, Text, StatusBar, TouchableOpacity, Alert, StyleSheet, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getDataPemesananById, editDataPemesanan, UploadGambarBuktiPembayaran } from '../confiqs/api'
import moment from 'moment'
import Clipboard from '@react-native-clipboard/clipboard'
import ImageCropPicker from 'react-native-image-crop-picker'
import { currencyFormat } from '../utils/mataUang'
import Loading from '../components/Loading'
import LabelStatus from '../components/LabelStatus'
import BtnGoBack from '../components/BtnGoBack'
import IonIcons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  Header: { marginTop: 50, marginBottom: 30 },
  subJudul: { color: '#666666', fontSize: 16 },
  text1: { color: 'black', fontSize: 16, fontWeight: 500 },
  btnUpload: { borderWidth: 1, borderColor: '#106AF0', borderRadius: 50, padding: 10, marginVertical: 10 },
  textBtn: { color: '#106AF0', fontSize: 18, textAlign: 'center', fontWeight: 600 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { backgroundColor: 'white', borderRadius: 20, alignItems: 'center', width: '40%', marginHorizontal: '30%' },
  btn_inModal: { paddingVertical: 10, color: 'black', fontSize: 20, textAlign: 'center' }
})

export default function DetailRiwayat (props) {
  const IdPemesanan = props.route.params.idPemesanan
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [data, setData] = useState()
  const navigation = useNavigation()

  async function getPemesananByIdPemesanan () {
    const { data } = await getDataPemesananById(IdPemesanan)
    setData(data[0])
  }

  useEffect(() => {
    setLoading(true)
    getPemesananByIdPemesanan()
    setLoading(false)
  }, [])

  async function changeStatus (newStatus) {
    await editDataPemesanan({ IdPemesanan, Status: newStatus })
  }

  function cancelHandler () {
    Alert.alert('Info', 'Yakin Ingin Membatalkan Pemesanan?', [
      {
        text: 'Batal',
        style: 'cancel'
      },
      {
        text: 'Yakin',
        onPress: async () => { await changeStatus('Batal'); navigation.goBack() }
      }
    ])
  }

  function takePhotofromCamera () {
    ImageCropPicker.openCamera({
      width: 300, height: 300
    }).then(async (image) => {
      const payload = {
        IdPemesanan,
        TanggalUpload: moment().format('YYYY-MM-DD')
      }
      setLoading(true)
      await UploadGambarBuktiPembayaran(image.path, payload)
      await changeStatus('Menunggu Konfirmasi')
      await getPemesananByIdPemesanan()
      setLoading(false)
    }).catch(err => console.log(err))
  }

  function takePhotofromGalery () {
    ImageCropPicker.openPicker({
      width: 300, height: 300, cropping: false, mediaType: 'photo'
    }).then(async (image) => {
      const payload = {
        IdPemesanan,
        TanggalUpload: moment().format('YYYY-MM-DD')
      }
      setLoading(true)
      await UploadGambarBuktiPembayaran(image.path, payload)
      await changeStatus('Menunggu Konfirmasi')
      await getPemesananByIdPemesanan()
      setLoading(false)
    }).catch(err => console.log(err))
  }

  if (!data) {
    return (
      <Loading visible={loading} />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <Loading visible={loading} />
      <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, minHeight: '100%', paddingHorizontal: 20 }}>
        <View style={styles.Header}>
          <Text style={{ color: 'black', textAlign: 'center', fontSize: 30, fontWeight: 600 }}>Detail Riwayat</Text>
          <BtnGoBack />
        </View>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5, paddingVertical: 10, borderStyle: 'dashed', borderBottomWidth: 2, borderColor: '#666666' }}>
            <Text style={{ color: '#666666', fontSize: 18, fontWeight: 800 }}>#{data.IdPemesanan}</Text>
            <LabelStatus status={data.Status} />
          </View>
          <View style={{ marginVertical: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.subJudul}>Tanggal Order</Text>
              <Text style={styles.text1} >{moment(data.TanggalPemesanan).format('DD MMM YYYY hh:mm:ss')}</Text>
            </View>
            <View>
              <Text style={styles.subJudul}>Tanggal Masuk</Text>
              <Text style={styles.text1} >{moment(data.TanggalMasuk).format('DD MMM YYYY')}</Text>
            </View>
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.subJudul}>Tiket</Text>
            {data.detail.map((item, index) => (
              <View key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.text1}>{`Tiket ${item.NamaKategori} = ${item.Qty} x ${currencyFormat(item.Harga)}`}</Text>
                <Text style={styles.text1}>{currencyFormat(item.Harga * item.Qty)}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.subJudul}>Total</Text>
            <Text style={[styles.text1, { fontSize: 18 }]}>{currencyFormat(data.Total)}</Text>
          </View>
          <View style={{ marginBottom: 10, padding: 10, backgroundColor: '#F5F5F5', borderRadius: 10 }}>
            <Text style={styles.subJudul}>Metode Pembayaran</Text>
            <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={styles.text1}>{data.NamaPembayaran}</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>A/n {data.An}</Text>
              </View>
              {data.Status === 'Menunggu Pembayaran' &&
                <TouchableOpacity onPress={() => Clipboard.setString(data.NoRekening)} activeOpacity={0.4}>
                  <Text style={styles.text1}>{data.NoRekening} <IonIcons name={'copy-outline'} size={18} color={'black'} /></Text>
                </TouchableOpacity>
              }
            </View>
          </View>
          {data.Status === 'Menunggu Pembayaran' &&
            <View>
              <TouchableOpacity onPress={() => setModal(true)} activeOpacity={0.4} style={styles.btnUpload}>
                <Text style={styles.textBtn}>Upload Bukti Pembayaran</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => cancelHandler()} activeOpacity={0.4}>
                <Text style={{ color: 'red', textAlign: 'center' }}>Batalkan Pemesanan</Text>
              </TouchableOpacity>
            </View>
          }

          <Modal visible={modal} animationType="fade" transparent={true} onDismiss={() => this.setModal(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <TouchableOpacity style={{ width: '100%' }} onPress={() => { takePhotofromCamera(); setModal(false) }} ><Text style={styles.btn_inModal}>Kamera</Text></TouchableOpacity>
                <TouchableOpacity style={{ width: '100%' }} onPress={() => { takePhotofromGalery(); setModal(false) }} ><Text style={styles.btn_inModal}>Galeri</Text></TouchableOpacity>
                <TouchableOpacity style={{ width: '100%' }} onPress={() => setModal(false)} ><Text style={[styles.btn_inModal, { color: 'red', marginTop: 20 }]}>Batal</Text></TouchableOpacity>
              </View>
            </View>
          </Modal>

        </View>
      </View>
    </View>
  )
}
