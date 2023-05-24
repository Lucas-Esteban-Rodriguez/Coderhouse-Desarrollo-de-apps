import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { addFolder } from '../store/folders.action';
import { useDispatch } from 'react-redux';

const NewFolderScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleAddFolder = () => {
    dispatch(addFolder(name));
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Folder</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Folder name"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddFolder}>
        <Text style={styles.buttonText}>Add Folder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default NewFolderScreen;