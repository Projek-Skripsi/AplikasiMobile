import { StatusBar, Image, View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const styles = StyleSheet.create({
  splash_title: { color: '#106AF0', fontFamily: 'Gloss_And_Bloom', fontSize: 45 },
  splash_desc: { color: '#666666', fontFamily: 'Inter', fontSize: 20, width: '80%', textAlign: 'center' }
})

export default function Splash ({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Beranda')
    }, 3000)
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Image source={require('../assests/Logo.png')} style={{ width: '45%', height: '15%' }} resizeMode='stretch' />
      <Text style={styles.splash_title}>Kolam Sejahtera</Text>
      <Text style={styles.splash_desc}>Effortlessly Book Your Swimming Pool Tickets</Text>
    </View>
  )
}
