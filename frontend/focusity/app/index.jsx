import { StyleSheet, Text, View} from 'react-native'
import { Link, router } from "expo-router"

// THEMED
import ThemedText from '../components/ThemedText'
import ThemedButton from "../components/ThemedButton"

const Home = () => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ThemedText>Home</ThemedText>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/profile">Profilo</Link>
      <Link href="/sessions">Sessioni</Link>
      
      <ThemedButton onPress={() => router.replace("/login")}>
            <Text title>Login</Text>
      </ThemedButton>
      <ThemedButton onPress={() => router.replace("/register")}>
            <Text title>Register</Text>
      </ThemedButton>
      <ThemedButton onPress={() => router.replace("/profile")}>
            <Text title>Profilo</Text>
      </ThemedButton>
      <ThemedButton onPress={() => router.replace("/sessions")}>
            <Text title>Sessioni</Text>
      </ThemedButton>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})