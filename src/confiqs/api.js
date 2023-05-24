import { Alert } from 'react-native'
import axios from 'axios'
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'

const api = axios.create({
  baseURL: 'http://192.168.43.137:3000'
})

export function register (nama, email, password) {
  return (
    auth().createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        await addDataRegister({ IdPengguna: res.user.uid, Nama: nama, Email: email })
        return { error: false }
      })
      .catch((error) => {
        Alert.alert(error.code, error.message)
        return { error: true }
      })
  )
}

export async function addDataRegister ({ IdPengguna, Nama, Email, UrlGambar = 'https://firebasestorage.googleapis.com/v0/b/kolamsejahtera-c2d19.appspot.com/o/profilTemplate.jpg?alt=media&token=250053b6-930e-4179-b8f2-a7aaa99fc8ce', Status = 'Aktif' }) {
  await api.post('/pengguna', { IdPengguna, Nama, Email, UrlGambar, Status })
}

export function login (email, password) {
  return (
    auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth().currentUser.uid
        return { error: false, dataLogin: user }
      })
      .catch((error) => {
        Alert.alert(error.code, error.message)
        return { error: true, dataLogin: '' }
      })
  )
}

export function logout () {
  return (
    auth().signOut()
      .then(() => { return { error: false } })
      .catch(() => { return { error: true } })
  )
}

export function resetPassword (email) {
  return (
    auth().sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('Berhasil', 'Silahkan cek email Anda!')
      })
      .catch((error) => {
        Alert.alert(error.code, error.message)
      })
  )
}

export async function getAllDataPengguna () {
  try {
    const response = await api.get('/pengguna')
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getDataPengguna (IdPengguna) {
  try {
    const response = await api.get(`/pengguna/${IdPengguna}`)
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getDataKategoriKolam () {
  try {
    const response = await api.get('/kategori')
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getDataKolam () {
  try {
    const response = await api.get('/kolam')
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getDataRating () {
  try {
    const response = await api.get('/rating')
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getDataRatingByIdPemesanan (IdPemesanan) {
  try {
    const response = await api.get(`/rating/${IdPemesanan}`)
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getDataCarousel () {
  try {
    const response = await api.get('/carousel')
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getDataPerusahaan () {
  try {
    const response = await api.get('/perusahaan')
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getDataJumlahPengunjung (hariIni) {
  try {
    const response = await api.get(`/pemesanan/totalPengunjung/${hariIni}`)
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export function UploadGambarPengguna (gambar, dataPengguna) {
  const fileName = Date.now()
  return (
    storage().ref('Profile/' + fileName).putFile(gambar)
      .then(() => {
        storage().ref('Profile/' + fileName).getDownloadURL()
          .then(async (url) => {
            await editDataPengguna({ ...dataPengguna, UrlGambar: url })
          })
      })
  )
}

export async function editDataPengguna ({ IdPengguna, Nama, Email, UrlGambar, Status }) {
  await api.put(`/pengguna/${IdPengguna}`, { Nama, Email, UrlGambar, Status })
}

export async function getAllDataPemesanan () {
  try {
    const response = await api.get('/pemesanan')
    const data = await response.data.payload.pemesanan
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getAllDataPembayaran () {
  try {
    const response = await api.get('/pembayaran')
    const data = await response.data.payload
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function addPemesanan (data) {
  await api.post('/pemesanan', data)
}

export async function getDataPemesananByUser (IdPengguna) {
  try {
    const response = await api.get(`/pemesanan/user/${IdPengguna}`)
    const data = await response.data.payload.pemesanan
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function getDataPemesananById (IdPemesanan) {
  try {
    const response = await api.get(`/pemesanan/${IdPemesanan}`)
    const data = await response.data.payload.pemesanan
    return { data }
  } catch (error) {
    Alert.alert(error.code, error.message)
  }
}

export async function addRating (data) {
  await api.post('/rating', data)
}
