import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar"
import { moderateScale } from "react-native-size-matters"

// THEMED
import ThemedIcons from "../../components/ThemedIcons"

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const ICON_SIZE = 29

  return (
    <>
    <StatusBar value="auto" />
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle:{
                backgroundColor: theme.navBackground,
                paddingTop: 15,
                height: moderateScale(80)
            },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor
    }}
    >
        <Tabs.Screen name="sessions" options={{tabBarIcon: ({focused}) => (
            <ThemedIcons
                size={ICON_SIZE}
                name={focused ? "school" : "school-outline"}
                color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}/>

        <Tabs.Screen name="profile" options={{tabBarIcon: ({focused}) => (
            <ThemedIcons
                size={ICON_SIZE}
                name={focused ? "person" : "person-outline"}
                color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}/>

        <Tabs.Screen name="createSession" options={{href: null}}/>
    </Tabs>
    </>
  )
}

export default DashboardLayout