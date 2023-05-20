import { View, Text, StatusBar, TextInput, TouchableOpacity, Pressable, Image, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getDataPengguna, UploadGambarPengguna, editDataPengguna } from '../confiqs/api'
import ImageCropPicker from 'react-native-image-crop-picker'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Loading from '../components/Loading'

const styles = StyleSheet.create({
  btn_editGmabar: { position: 'absolute', padding: 8, borderRadius: 50, backgroundColor: '#F5F5F5', bottom: 0, right: 0 },
  textInput: { borderWidth: 1, borderColor: '#DDDDDD', color: 'black', fontSize: 18, padding: 10, borderRadius: 10, marginVertical: 5 },
  btn: { position: 'absolute', bottom: 20, width: '100%', marginHorizontal: 20, borderWidth: 1, borderColor: '#106AF0', borderRadius: 50, padding: 10 },
  textBtn: { fontSize: 18, textAlign: 'center', fontWeight: 600 }
})

export default function EditAkun (props) {
  const IdPengguna = props.route.params.IdPengguna
  const [pengguna, setPengguna] = useState([])
  const [nama, setNama] = useState('')
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(false)

  async function getPengguna () {
    const { data } = await getDataPengguna(IdPengguna)
    setPengguna(data[0])
    setNama(data[0].Nama)
  }

  useEffect(() => {
    setLoading(true)
    getPengguna()
    setLoading(false)
  }, [])

  function takePhotofromGalery () {
    ImageCropPicker.openPicker({
      width: 300, height: 300
    }).then(async (image) => {
      setLoading(true)
      await UploadGambarPengguna(image.path, pengguna)
      await getPengguna()
      setLoading(false)
      setEdit(!edit)
    }).catch(err => console.log(err))
  }

  async function simpanData () {
    if (nama === '') {
      Alert.alert('Info', 'Nama tidak boleh kosong!')
    }
    else {
      setLoading(true)
      await editDataPengguna({ IdPengguna, Nama: nama })
      await getPengguna()
      setLoading(false)
      setEdit(!edit)
    }
  }

  function BtnEdit () {
    return (
      <TouchableOpacity onPress={() => setEdit(!edit)} style={[styles.btn, { backgroundColor: 'white' }]} activeOpacity={0.5}>
        <Text style={[styles.textBtn, { color: '#106AF0' }]}>Edit Akun</Text>
      </TouchableOpacity>
    )
  }

  function BtnSimpan () {
    return (
      <TouchableOpacity onPress={simpanData} style={[styles.btn, { backgroundColor: '#106AF0' }]} activeOpacity={0.5}>
        <Text style={[styles.textBtn, { color: 'white' }]}>Simpan Perubahan</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      <Loading visible={loading} />
      <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, minHeight: '100%', paddingHorizontal: 20 }}>
        <View style= {{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <View>
            {pengguna.UrlGambar && <Image source={{ uri: pengguna.UrlGambar }} style={{ width: 100, height: 100, borderRadius: 50 }} resizeMode='stretch' />}
            {edit && <Pressable onPress={takePhotofromGalery} style={ styles.btn_editGmabar }><FontAwesome name={'camera'} size={20} color={'black'} /></Pressable>}
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'black', fontWeight: 700, fontSize: 30 }}>{pengguna.Nama}</Text>
            <Text style={{ color: '#666666', fontSize: 18 }}>{pengguna.Email}</Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput editable={edit} maxLength={25} value={nama} onChangeText={value => setNama(value)} placeholder='Nama' style={edit ? styles.textInput : [styles.textInput, { backgroundColor: '#EEEEEE', color: '#666666' }]} />
          <TextInput editable={false} value={pengguna.Email} placeholder='Nama' style={[styles.textInput, { backgroundColor: '#EEEEEE', color: '#666666' }]} />
        </View>
        { edit ? <BtnSimpan /> : <BtnEdit />}
      </View>
    </View>
  )
}
