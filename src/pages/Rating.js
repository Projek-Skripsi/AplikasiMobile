import { View, Text, ScrollView, StatusBar, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import BtnGoBack from '../components/BtnGoBack'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RatingList from '../components/RatingList'

const btnFilter = [
  { status: 0 },
  { status: 1 },
  { status: 2 },
  { status: 3 },
  { status: 4 },
  { status: 5 }
]

const styles = StyleSheet.create({
  Header: { marginTop: 50, marginBottom: 30, marginHorizontal: 20 },
  btnFilter: { width: 60, alignItems: 'center', borderWidth: 1, padding: 5, borderRadius: 10, borderColor: '#666666' },
  btnFilterActive: { borderWidth: 2, borderColor: '#106AF0' },
  textBtnFilter: { color: '#666666' },
  textBtnFilterActive: { color: '#106AF0', fontWeight: 'bold' },
  emptyFilter: { color: '#666666', textAlign: 'center' }
})

export default function Rating (props) {
  const ratings = props.route.params.AllRating
  const [rating, setRating] = useState(ratings)
  const [filter, setFilter] = useState(0)

  const rataRata = (ratings.reduce((x, y) => x + y.Bintang, 0) / ratings.length).toFixed(1)

  function filterRating () {
    if (filter === 0) {
      setRating(ratings)
    }
    else {
      setRating(ratings.filter(item => item.Bintang === filter))
    }
  }

  useEffect(() => {
    filterRating()
  }, [filter])

  function RatingShow () {
    if (rating.length === 0) {
      return <Text style={styles.emptyFilter}>Ulasan tidak ditemukan</Text>
    }
    else {
      return (
        rating.map((item) => (
          <RatingList key={item.IdRating} rating={item} />
        ))
      )
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      <View style={{ backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 20, minHeight: '100%' }}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.Header}>
            <View>
              <Text style={{ color: 'black', textAlign: 'center', fontSize: 30, fontWeight: 600 }}>Ulasan</Text>
              <Text style={{ color: '#666666', textAlign: 'center', fontSize: 20, fontWeight: 600 }}><FontAwesome name={'star'} size={20} color={'#F4BF35'} /> {`${rataRata} (${ratings.length})`}</Text>
            </View>
            <BtnGoBack top={'25%'} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ color: '#666666', fontSize: 16, fontWeight: 600 }}>Urutkan</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              {btnFilter.map((item, index) => (
                <Pressable key={index} style={[styles.btnFilter, filter === item.status && styles.btnFilterActive]} onPress={() => setFilter(item.status)}>
                  {item.status === 0 ? <Text style={[styles.textBtnFilter, filter === item.status && styles.textBtnFilterActive]}>Semua</Text> : <Text style={[styles.textBtnFilter, filter === item.status && styles.textBtnFilterActive]}><FontAwesome name={'star'} size={18} color={'#F4BF35'} /> {item.status}</Text>}
                </Pressable>
              ))}
            </View>
          </View>
          <RatingShow />
        </ScrollView>
      </View>
    </View>
  )
}
