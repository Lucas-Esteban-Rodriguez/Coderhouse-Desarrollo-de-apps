import * as ImagePicker from 'expo-image-picker'

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import COLORS from '../constants/COLORS'

const ImageSelector = ({onImage}) => {
    const [pickedUri, setPickedUri] = useState()

    const VerifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if(status !== 'granted') {
            Alert.alert('Permisos insuficientes')
            return false
        }
        return true

     }

    const handlerTakeImage = async () => {
        const isCameraOk = await VerifyPermissions()
        if (!isCameraOk) return
        
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true, 
            aspect: [16,9],
            quality: 0.8,
        })
        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
     }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri
                    ? (<Text>No hay imagen seleccionada...</Text>)
                    : (<Image style={styles.image} source={{ uri: pickedUri }} />)
                }
            </View>
            <Button
                title="Tomar foto"
                color={COLORS.LIGHT_PINK}
                onPress={handlerTakeImage}
            />
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.PINK,
        borderWidth: 2
    },
    image: {
        width: '100%',
        height: '100%'
    }
})