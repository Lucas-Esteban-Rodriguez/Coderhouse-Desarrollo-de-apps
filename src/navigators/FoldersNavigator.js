import COLORS from "../constants/COLORS";
import FolderDetailsScreen from "../screens/FolderDetailScreen";
import FoldersListScreen from '../screens/FoldersListScreen'
import { Ionicons } from "@expo/vector-icons";
import NewFolderScreen from "../screens/NewFolderScreen";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const FoldersNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName="foldersList"
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.LIGHT_PINK
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
        >
            <Stack.Screen
            name="foldersList"
            component={FoldersListScreen}
            options={({ navigation }) => ({
                title: 'Carpetas',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('newFolder')}>
                        <Ionicons name="add-circle-outline" size={24} color="white" />
                    </TouchableOpacity>
                )
            })}
            />
            
            <Stack.Screen
            name="newFolder"
            component={NewFolderScreen}
            options={{title: 'Nueva carpeta'}}
            />

            <Stack.Screen
            name='folderDetail'
            component={FolderDetailsScreen}
            options={({ route }) => ({
                title: route.params.folder.name
            })}
            />

        </Stack.Navigator>
    )
}

export default FoldersNavigator
