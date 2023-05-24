import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import COLORS from '../constants/COLORS'

const ImageItem = ({ id,title, image, onDelete, onSelect }) => {
    const onHandleDeleteImage= () => {
        onDelete(id)
    }
  return (
    <TouchableOpacity style={styles.imageItem} onPress={onSelect}>
       <Image style={styles.image} source={{ uri: image }} />
    
        <Button style={styles.button} onPress={onHandleDeleteImage} title='X' color={'red'} />
       
    </TouchableOpacity>
  )
}

export default ImageItem

const styles = StyleSheet.create({
    imageItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        backgroundColor: COLORS.PEACH_PUFF,
        marginBottom: 6
    },
    title: {
        color: COLORS.BLUSH,
        fontSize: 18,
        marginBottom: 6
    },
})