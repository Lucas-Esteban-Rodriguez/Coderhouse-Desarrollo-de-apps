import COLORS from '../constants/COLORS'
import ImageScreen from '../screens/ImageScreen'
import ImagesListScreen from '../screens/ImagesListScreen'
import { Ionicons } from '@expo/vector-icons'
import NewImageScreen from '../screens/NewImageScreen'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const GaleryNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.LIGHT_BROWN,
            },
            headerTintColor: 'white',
            headerTintStyle: {
                fontWeight: 'bold',
            }
        }}
        >

        <Stack.Screen name='Home'
        component={ImagesListScreen}
        options={({ navigation }) => ({
            title: 'Fotos',
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                    <Ionicons name="add-circle-outline" size={24} color="white" />
                </TouchableOpacity>
            )
        })}
        />

        <Stack.Screen name='Nuevo'
        component={NewImageScreen}
        options={{title: 'Nuevo'}}
        />

        <Stack.Screen name='Detalle'
        component={ImageScreen}
        options={({ route }) => ({
            title: route.params.imageTitle
        })}
        />

    </Stack.Navigator>
  )
}

export default GaleryNavigator