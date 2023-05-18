import { Alert } from 'react-native'
import axios from 'axios'
import auth from '@react-native-firebase/auth'
// import storage from '@react-native-firebase/storage'
// import moment from 'moment'

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
