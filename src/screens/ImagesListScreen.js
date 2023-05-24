import { FlatList, StyleSheet } from 'react-native'
import { loadImages, removeImage } from '../store/images.actions'
import { useDispatch, useSelector } from 'react-redux'

import ImageItem from '../components/ImageItem'
import { useLayoutEffect } from 'react'

const ImagesListScreen = ({ navigation }) => {
  const images = useSelector((state)=> state.images.images)
  const dispatch = useDispatch()

  const onHandlerDelete = (id) => {
    dispatch(removeImage(id))
    dispatch(loadImages())
  }

  const renderImageItem = (data) => (
    <ImageItem
    id={data.item.id}
    title={data.item.title}
    image={data.item.image}
    onSelect={()=> navigation.navigate('Detalle', { imageId: data.item.id, imageTitle: data.item.title })}
    onDelete={() => onHandlerDelete(data.item.id)}
    />
  )

  useLayoutEffect(() => {
    dispatch(loadImages())
  },[])
  
  return (
    <FlatList
      style={styles.container}
      data={images}
      renderItem={renderImageItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.columns}
      />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columns: {
    marginHorizontal: 35,
    marginTop: 20,
    gap: 25
  }
})
export default ImagesListScreen