import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(dashboard)" />
        <Stack.Screen name="(session)" />
      </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})