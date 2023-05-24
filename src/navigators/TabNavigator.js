import { AntDesign, Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import FoldersNavigator from './FoldersNavigator'
import GaleryNavigator from "./GaleryNavigator";
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName="GaleriaTab"
        screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar}}
        >

        <BottomTabs.Screen
        name="GaleriaTab"
        component={GaleryNavigator}
        options={{
            tabBarIcon: ({}) => (
                <View style={styles.item}>
                    <Feather name='clock' size={24} color={'black'} />
                    <Text>Recientes</Text>
                </View>
            )
        }}
        />
        
        <BottomTabs.Screen
        name="CarpetasTab"
        component={FoldersNavigator}
        options={{
            tabBarIcon: ({}) => (
                <View style={styles.item}>
                    <AntDesign name='folder1' size={24} color={'black'} />
                    <Text>Carpetas</Text>
                </View>
            )
        }}
        />


    </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7fdf0',
        shadowOffset: {width:0,height:10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TabNavigator