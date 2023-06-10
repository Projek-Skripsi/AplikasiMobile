import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import IonIcons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  btnBack: { position: 'absolute' }
})

export default function BtnGoBack ({ top = 0 }) {
  const navigation = useNavigation()

  return (
    <Pressable style={[styles.btnBack, { top }]} onPress={(() => navigation.goBack())}>
        <IonIcons name='chevron-back' color='black' size={35} />
    </Pressable>
  )
}
