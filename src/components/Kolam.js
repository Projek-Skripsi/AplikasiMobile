import { FlatList, Text, StyleSheet, View } from 'react-native'
import { Card } from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'

const styles = StyleSheet.create({
  card: { width: 250, height: 230, backgroundColor: 'white', marginLeft: 20, marginTop: 5, marginBottom: 30, borderRadius: 30, padding: 5 },
  card_gambar: { height: 150, borderRadius: 30, borderTopRightRadius: 30, marginBottom: 10 },
  status: { color: '#969696', fontSize: 18, marginTop: 0 }
})

export default function Kolam ({ dataKolam }) {
  function Status ({ Status, Color }) {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name={'dot-single'} color={Color} size={30} />
            <Text style={[styles.status, { color: Color }]}>{Status}</Text>
        </View>
    )
  }

  return (
    <FlatList horizontal keyExtractor={(item, index) => index.toString()} data={dataKolam} renderItem={({ item, index }) => (
        <Card key={item.IdKolam} style={index + 1 === dataKolam.length ? [styles.card, { marginRight: 20 }] : styles.card} elevation={4} >
          <Card.Cover source={{ uri: item.UrlGambar }} style={styles.card_gambar} />
          <Card.Content>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{item.Judul}</Text>
            {item.Status === 'Tersedia'
              ? <Status Status={item.Status} Color={'#21BF44'} />
              : <Status Status={item.Status} Color={'#969696'} />}
          </Card.Content>
        </Card>
    )} />
  )
}
