import { Image, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect, useState } from 'react';

import { FlatList } from 'react-native';
import { addImageFolder } from '../store/folders.action';
import { deleteFolder } from '../store/folders.action';
import { loadImages } from '../store/images.actions';

const FolderDetailsScreen = ({ route, navigation}) => {

    const dispatch= useDispatch()
    const folder = route.params.folder;
    const images = useSelector((state)=> state.images.images)

    const [ imgTitle, setImgTitle ] = useState(null)

  const handleAddImage = () => {
    if (imgTitle) {
        const imageSelected = images.find( (img) => img.title === imgTitle )
        const newImage = { title: imageSelected.title , uri: imageSelected.image }
        dispatch(addImageFolder({
            id: folder.id,
            name: folder.name,
            images: [...folder.images, newImage]
        }))
        setImgTitle(null)
        dispatch(loadImages())
    }}

  useLayoutEffect(() => {
    dispatch(loadImages())
  },[dispatch])

  const handleDeleteFolder = () => {
    dispatch(deleteFolder(folder.id))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>

        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                autoCapitalize='none'
                onChangeText={setImgTitle}
                value={imgTitle}
                placeholder='Titulo de la imagen'
            />
            <TouchableOpacity onPress={handleAddImage}>
                <Text>Agregar imagen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDeleteFolder}>
              <Text>Eliminar Carpeta</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.containerFlatlist}>
            <FlatList
            data={folder.images}
            keyExtractor={(index) => index.toString()}
            renderItem={({item}) => (
                <Image source={{uri:item.uri}} style={{ width: 100, height:100}} />
            )}
            numColumns={3}
            columnWrapperStyle={styles.columnStyle}
            />
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 7,
    marginBottom: 7
  },
  containerFlatlist: {
    marginTop: 25
  },
  columnStyle: {
    padding: 5,
    gap: 10
  }
});

export default FolderDetailsScreen;
