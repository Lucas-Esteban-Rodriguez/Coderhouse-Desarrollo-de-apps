import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import COLORS from '../constants/COLORS'
import ImageSelector from '../components/ImageSelector'
import { addImage } from '../store/images.actions'
import { useDispatch } from 'react-redux'

const NewNoteScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [imageValue, setImageValue] = useState('')
    const [titleValue, setTitleValue] = useState('')

    const saveImageHandler = () => {
        {imageValue && titleValue !== ''
            ?
        (
        dispatch(addImage(titleValue, imageValue)),
        navigation.navigate('Home')
        )
            :
        console.log('Faltan Datos')
        }
    }

    const titleChangeHandler = text => {
        setTitleValue(text)
    }

  return (
    <ScrollView style={styles.container}>
        <ImageSelector onImage={image => setImageValue(image)} />
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                placeholder='Titulo...'
                maxLength={40}
                onChangeText={titleChangeHandler}
            />
        </View>
        <Button onPress={saveImageHandler} title='Guardar' color={COLORS.PINK} />
    </ScrollView>
  )
}

export default NewNoteScreen

const styles = StyleSheet.create({
    inputText: {
        margin: 5,
        width: 300,
        borderBottomWidth:1,
        borderColor: 'black'
    },
    container : {
        margin: 10
    },
})