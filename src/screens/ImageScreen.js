import { Image, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import COLORS from '../constants/COLORS'
import React from 'react'
import { useSelector } from 'react-redux'

const ImageScreen = ({ route }) => {
    const { imageId } = route.params
    const image = useSelector(state => state.images.images.find(item => item.id === imageId))

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {image.title} </Text>
      <Image source={{uri: image.image}} style={styles.image} />
      <TouchableOpacity style={styles.buttonShare} onPress={()=>{Share.share({
        url: image.image,
        message: image.title
      })}}>
        <Text style={styles.titleShare}>Compartir</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    image: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 25,
        padding: 20
    },
    buttonShare: {
      padding: 10,
      margin: 8,
      backgroundColor: COLORS.LIGHT_BROWN,
      borderRadius: 6,
    },
    titleShare: {
      fontWeight: 'bold',
      fontSize: 15
    }
})