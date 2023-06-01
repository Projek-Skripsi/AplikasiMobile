import { View, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const styles = StyleSheet.create({
  gambar: { width: '90%', height: 250, borderRadius: 30 }
})

export default function CarouselImg ({ dataCarousel }) {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  const renderItem = ({ item }) => {
    return (
      <Image source={{ uri: item.UrlGambar }} resizeMode='stretch' style={styles.gambar} />
    )
  }

  return (
    <View>
      <Carousel
        data={dataCarousel}
        renderItem={ renderItem }
        itemWidth={width}
        sliderWidth={width}
        itemHeight={height}
        onSnapToItem={(index) => setIndex(index)}
        ref={isCarousel}
        autoplay
        loop
        enaleSnap
      />
      <Pagination
        dotsLength={dataCarousel.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        containerStyle= {{ paddingTop: 15 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#106AF0'
        }}
        inactiveDotStyle={{
          backgroundColor: '#666666'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  )
}
