import { FlatList, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'
import React from 'react'

const styles = StyleSheet.create({
  card: { width: 250, height: 250, backgroundColor: 'white', marginLeft: 20, marginTop: 5, marginBottom: 30, borderRadius: 30, padding: 5 },
  card_gambar: { height: 150, borderRadius: 30, borderTopRightRadius: 30, marginBottom: 10 },
  status: { color: '#969696', fontSize: 16, marginTop: 5 }
})

export default function Kolam ({ dataKolam }) {
  return (
    <FlatList horizontal keyExtractor={(item, index) => index.toString()} data={dataKolam} renderItem={({ item, index }) => (
        <Card key={item.IdKolam} style={index + 1 === dataKolam.length ? [styles.card, { marginRight: 20 }] : styles.card} elevation={4} >
          <Card.Cover source={{ uri: item.UrlGambar }} style={styles.card_gambar} />
          <Card.Content>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{item.Judul}</Text>
            {item.Status === 'Tersedia'
              ? <Text style={[styles.status, { color: '#21BF44' }]}>{`\u2022 ${item.Status}`}</Text>
              : <Text style={[styles.status, { color: '#666666' }]}>{`\u2022 ${item.Status}`}</Text>}
          </Card.Content>
        </Card>
    )} />
  )
}
