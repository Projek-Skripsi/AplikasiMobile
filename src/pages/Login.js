import { Alert, View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { login, logout, resetPassword, getAllDataPengguna } from '../confiqs/api'
import { CONFIQ } from '../utils/datas'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../components/Loading'

const styles = StyleSheet.create({
  loginText: { color: 'black', textAlign: 'center', fontFamily: 'Inter' },
  formTextInput: { display: 'flex', flexDirection: 'row', alignItems: 'center', borderWidth: 1, color: 'black', marginBottom: 20, borderRadius: 50, paddingHorizontal: 10 },
  textInput: { width: '90%' },
  btn_daftar: { alignItems: 'center', elevation: 5, backgroundColor: '#106AF0', marginVertical: 20, borderRadius: 50, marginHorizontal: 30 },
  btn_resetPassword: { alignItems: 'center', borderColor: '106AF0', backgroundColor: '#106AF0', marginVertical: 20, borderRadius: 50, marginHorizontal: 30 },
  containerModal: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, 0.4)' }
})

export default function Login ({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [colorMail, setColorMail] = useState('#666666')
  const [colorPassword, setColorPassword] = useState('#666666')
  const [hidePassword, sethidePassword] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [allPengguna, setAllPengguna] = useState([])

  async function getAllPengguna () {
    const { data } = await getAllDataPengguna()
    setAllPengguna(data)
  }

  useEffect(() => {
    getAllPengguna()
  })

  async function onLogin () {
    if (email === '' || password === '') {
      Alert.alert('Info', 'Pastikan semua data telah terisi!')
    }
    else {
      setLoading(true)
      const emailValid = email.toLowerCase()
      const { error, dataLogin } = await login(emailValid, password)
      if (!error) {
        const currentUser = allPengguna.filter((item) => item.IdLogin === dataLogin)
        if (currentUser.length === 0) {
          await logout()
          Alert.alert('Akses ditolak', 'Anda tidak dapat masuk sebagai admin!')
          setEmail('')
          setPassword('')
        }
        else {
          await AsyncStorage.setItem(CONFIQ.authUser, currentUser[0].IdPengguna.toString())
          navigation.replace('Beranda')
        }
      }
      setLoading(false)
    }
  }

  async function onResetPassword () {
    const emailValid = email.toLowerCase()
    await resetPassword(emailValid)
    setModalVisible(!modalVisible)
    Alert.alert('Email Terkirim', 'Silahkan cek e-mail untuk link reset password Anda!')
    setEmail('')
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <Loading visible={loading} />
      <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
        <View style={{ backgroundColor: 'blue' }}>
          <Image source={require('../assests/Logo.png')} resizeMode='stretch' style={{ width: 250, height: 150 }} />
          <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, marginTop: -30, marginBottom: 20, minHeight: '100%' }}>
            <View style={{ marginTop: 100, marginHorizontal: 30, marginBottom: 30 }}>
              <Text style={ [styles.loginText, { fontWeight: 'bold', fontSize: 30 }] }>MASUK</Text>
              <Text style={ [styles.loginText, { fontSize: 20 }] } >Masuk ke akunmu</Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <View style={[styles.formTextInput, { borderColor: colorMail }] }>
                <AntDesign name={'mail'} color={colorMail} size={25} />
                <TextInput value={email} onChangeText={value => setEmail(value)} placeholderTextColor={colorMail} inputMode='email' placeholder='E-mail' onFocus={() => setColorMail('#106AF0')} onBlur={() => setColorMail('#666666')} style={ [styles.textInput, { borderColor: colorMail, color: colorMail }] } />
              </View>
              <View style={[styles.formTextInput, { borderColor: colorPassword }] }>
                <AntDesign name={'lock'} color={colorPassword} size={25} />
                <TextInput value={password} onChangeText={value => setPassword(value)} placeholderTextColor={colorPassword} secureTextEntry={hidePassword} placeholder='Password' onFocus={() => setColorPassword('#106AF0')} onBlur={() => setColorPassword('#666666')} style={ [styles.textInput, { borderColor: colorPassword, color: colorPassword, width: '85%' }] } />
                {password ? <Octicons onPress={() => sethidePassword(!hidePassword)} name={hidePassword ? 'eye-closed' : 'eye'} color={colorPassword} size={20} /> : '' }
              </View>
            </View>
            <TouchableOpacity onPress={onLogin} activeOpacity={0.9} style={styles.btn_daftar}>
              <Text style={{ color: 'white', fontSize: 25, paddingVertical: 10 }}>Masuk</Text>
            </TouchableOpacity>
            <Text onPress={() => setModalVisible(!modalVisible) } style={{ color: '#666666', textAlign: 'center', marginBottom: 20 }}>Lupa Password?</Text>
            <Text style={{ color: '#666666', textAlign: 'center' }}>Belum punya akun?
                <Text onPress={() => navigation.replace('Daftar')} style={{ color: '#106AF0', fontWeight: 'bold' }}> Daftar</Text>
            </Text>
          </View>
          {/* Modal Reset Password */}
          <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible) }>
            <View style={styles.containerModal}>
              <View style={{ backgroundColor: 'white', paddingHorizontal: 30, paddingVertical: 20, borderRadius: 30 }}>
                <Text style={{ color: '#106AF0', fontWeight: 'bold', fontSize: 25, marginBottom: 20 }}>Reset Password</Text>
                <TextInput value={email} onChangeText={value => setEmail(value)} placeholderTextColor={'#666666'} inputMode='email' placeholder='Masukkan alamat e-mail'style={{ borderColor: '#666666', color: '#666666', borderWidth: 1, width: 250 }} />
                <TouchableOpacity
                  style={styles.btn_resetPassword}
                  onPress={onResetPassword}>
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: 600, paddingVertical: 5 }}>Kirim E-mail</Text>
                </TouchableOpacity>
                <Pressable
                  style={{ alignItems: 'center' }}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{ color: 'red' }}>Batalkan</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  )
}
