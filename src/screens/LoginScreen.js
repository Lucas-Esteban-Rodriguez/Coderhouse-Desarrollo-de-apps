import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';

import { TouchableOpacity } from 'react-native';
import { loginStart } from '../store/auth.action';
import { useDispatch } from 'react-redux';

const LoginScreen = ({ navigation, isLoggedIn, handleLogin }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, setError } = useState('')

  const onHandleLogin = () => {
    dispatch(loginStart(email, password));
    handleLogin()
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Login" onPress={onHandleLogin} />
        <Text>No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>Registrarme</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
