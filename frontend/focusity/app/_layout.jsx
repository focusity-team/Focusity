import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar'
import UserProvider from '../contexts/UserContext'

const RootLayout = () => {
  return (
    <UserProvider>
      <StatusBar value="auto" />
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(dashboard)" />
      </Stack>
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})