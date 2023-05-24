import LoginScreen from '../screens/LoginScreen'
import React from 'react'
import RegisterScreen from '../screens/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AuthNavigator = ({ isLoggedIn, handleLogin }) => {
  return (
    <Stack.Navigator
        initialRouteName='Register'
        screenOptions={{ headerShown : false}}
        >
        <Stack.Screen name='Register'
        component={RegisterScreen}
        options={{title: 'Nuevo'}}
        />
        <Stack.Screen name='Login'
        options={{title: 'Login'}}
        >
          {props => <LoginScreen {...props} isLoggedIn={isLoggedIn} handleLogin={handleLogin} />}
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthNavigator