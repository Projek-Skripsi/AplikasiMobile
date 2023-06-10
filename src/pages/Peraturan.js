import { View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { peraturan } from '../utils/datas'
import BtnGoBack from '../components/BtnGoBack'

export default function Peraturan () {
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <StatusBar backgroundColor={'blue'} barStyle="light-content" />
        <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, paddingHorizontal: 20, minHeight: '100%' }}>
          <View style={{ marginTop: 50, marginBottom: 30 }} >
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 30, fontWeight: 600 }}>Peraturan</Text>
            <BtnGoBack />
          </View>
          <ScrollView showsVerticalScrollIndicator={false} >
            {peraturan.map((item, index) => (
              <View key={index} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10, gap: 5 }}>
                  <Text style={{ color: '#666666', fontSize: 18 }}>{ '\u2022' }</Text>
                  <Text style={{ color: '#666666', fontSize: 18, textAlign: 'justify', width: '95%' }}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
    </View>
  )
}
