import { View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
// import Loading from '../components/Loading'

const styles = StyleSheet.create({
  loginText: { color: 'black', textAlign: 'center', fontFamily: 'Inter' },
  formTextInput: { display: 'flex', flexDirection: 'row', alignItems: 'center', borderWidth: 1, color: 'black', marginBottom: 20, borderRadius: 50, paddingHorizontal: 10 },
  textInput: { width: '90%' },
  btn_daftar: { alignItems: 'center', backgroundColor: '#106AF0', marginVertical: 20, borderRadius: 50, marginHorizontal: 30 }
})

export default function Daftar ({ navigation }) {
  // const [loading, setLoading] = useState(false)
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [colorNama, setColorNama] = useState('#666666')
  const [colorMail, setColorMail] = useState('#666666')
  const [colorPassword, setColorPassword] = useState('#666666')
  const [hidePassword, sethidePassword] = useState(true)

  return (
    <View style={{ flex: 1 }}>
      {/* <Loading visible={loading} /> */}
      <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      <View style={{ backgroundColor: 'blue' }}>
        <Image source={require('../assests/Logo.png')} resizeMode='stretch' style={{ width: 250, height: 150 }} />
        <View style={{ position: 'relative', top: -80, backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, marginTop: 50, minHeight: '100%' }}>
          <View style={{ marginTop: 100, marginHorizontal: 30, marginBottom: 30 }}>
           <Text style={ [styles.loginText, { fontWeight: 'bold', fontSize: 30 }] }>DAFTAR</Text>
            <Text style={ [styles.loginText, { fontSize: 20 }] } >Buat akun baru</Text>
          </View>
          <View style={{ marginHorizontal: 30 }}>
            <View style={[styles.formTextInput, { borderColor: colorNama }] }>
              <AntDesign name={'user'} color={colorNama} size={25} />
              <TextInput value={nama} onChangeText={value => setNama(value)} placeholderTextColor={colorNama} placeholder='Nama' onFocus={() => setColorNama('#106AF0')} onBlur={() => setColorNama('#666666')} style={ [styles.textInput, { borderColor: colorNama, color: colorNama }] } />
            </View>
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
          <TouchableOpacity onPress={() => console.warn('.replace(Login) => belum memiliki function')} activeOpacity={0.9} style={styles.btn_daftar}>
            <Text style={{ color: 'white', fontSize: 25, paddingVertical: 10 }}>Daftar</Text>
          </TouchableOpacity>
          <Text style={{ color: '#666666', textAlign: 'center' }}>Sudah punya akun?
              <Text onPress={() => navigation.replace('Login')} style={{ color: '#106AF0', fontWeight: 'bold' }}> Masuk</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}