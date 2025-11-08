import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Link } from "expo-router"

// THEMED
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ThemedText>Home</ThemedText>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/profile">Profilo</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})