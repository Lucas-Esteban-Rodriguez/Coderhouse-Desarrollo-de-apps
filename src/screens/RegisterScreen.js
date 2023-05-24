import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import COLORS from '../constants/COLORS'
import { registerUser } from '../store/auth.action'
import { useDispatch } from 'react-redux'

const RegisterScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = () =>{
        dispatch(registerUser(email, password))
        navigation.navigate('Login')
    }

  return (
    <KeyboardAvoidingView
    behavior='height'
    style={styles.screen}
    >
        <View style={styles.container}>
            <Text style={styles.title}> Registro </Text>

            <View>
                <Text style={styles.label}> Email </Text>
                <TextInput
                    style={styles.input}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={setEmail}
                    value={email}
                />
                <Text style={styles.label}> Clave </Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize='none'
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                    <Text style={styles.loginButtonText}>REGISTRARSE</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.prompt}>
                <Text style={styles.promptMessage}> ¿Ya tienes cuenta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login') }>
                    <Text style={styles.promptButton}> Ingresar </Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    prompt: {
        alignItems:'center'
    },
    promptMessage: {
        fontSize: 16,
        color: '#333',
        marginVertical: 6
    },
    promptButton: {
        fontSize: 16,
        color: COLORS.PINK
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    loginButton: {
        alignItems: 'center',
        backgroundColor: COLORS.PINK,
        padding: 5,
        borderRadius: 6,
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})