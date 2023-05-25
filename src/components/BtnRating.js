import { View, Text, TouchableOpacity, Modal, StyleSheet, Pressable, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CONFIQ } from '../utils/datas'
import moment from 'moment'
import { Rating } from 'react-native-ratings'
import { addRating } from '../confiqs/api'

const styles = StyleSheet.create({
  containerModal: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, 0.4)' },
  btnAction: { borderWidth: 1, borderColor: '#106AF0', borderRadius: 50, padding: 10 }
})

export default function BtnRating ({ IdPemesanan }) {
  const [authUser, setAuthUser] = useState(null)
  const [ulasan, setUlasan] = useState('')
  const [bintang, setBintang] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  async function getAuthUser () {
    const currentUser = await AsyncStorage.getItem(CONFIQ.authUser)
    setAuthUser(currentUser)
  }

  useEffect(() => {
    getAuthUser()
  }, [])

  async function createRating () {
    if (bintang) {
      try {
        const payload = {
          IdPemesanan,
          IdPengguna: authUser,
          Ulasan: ulasan,
          Bintang: bintang,
          TanggalUpload: moment().format('YYYY-MM-DD')
        }
        hideModal()
        await addRating(payload)
      } catch {
        throw Error('error')
      }
    }
    else {
      Alert.alert('Info', 'Bintang tidak boleh kosong!')
    }
  }

  function hideModal () {
    setModalVisible(false)
    setBintang(0)
    setUlasan('')
  }

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.btnAction}>
        <Text style={{ color: '#106AF0', fontSize: 18, textAlign: 'center', fontWeight: 600 }}>Beri Ulasan</Text>
      </TouchableOpacity>

      {/* Modal Add Rating */}
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => hideModal() }>
        <View style={styles.containerModal}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 20, width: 300 }}>
            <Rating startingValue={bintang} onSwipeRating={false} onFinishRating={(value) => setBintang(value)} />
            <TextInput value={ulasan} onChangeText={value => setUlasan(value)} multiline numberOfLines={4} maxLength={100} placeholder='Tulis Ulasan...' placeholderTextColor={'#666666'} style={{ borderColor: '#666666', borderWidth: 1, color: 'black', textAlignVertical: 'top', fontSize: 18, marginTop: 10 }} />
            <Text style={{ color: 'black', textAlign: 'right' }}>{ulasan.length}/100</Text>
            <TouchableOpacity onPress={() => createRating()} style={[styles.btnAction, { backgroundColor: '#106AF0', marginTop: 20, marginBottom: 10 }] } >
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 600, textAlign: 'center' }}>Kirim Ulasan</Text>
            </TouchableOpacity>
            <Pressable style={{ alignItems: 'center' }} onPress={() => hideModal()}>
              <Text style={{ color: 'red' }}>Tutup</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}
