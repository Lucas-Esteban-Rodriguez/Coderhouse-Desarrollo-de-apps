import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadFolders } from '../store/folders.action'
import { useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'

const FoldersListScreen = ({ navigation }) => {
  const folders = useSelector(state => state.folders.folders)
  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      dispatch(loadFolders())
    }, [])
  )

  const handleFolderPress = (folder) => {
    navigation.navigate('folderDetail', { folder })
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleFolderPress(item)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={folders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  list: {
    flexGrow: 1
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemText: {
    fontSize: 18
  }
});

export default FoldersListScreen