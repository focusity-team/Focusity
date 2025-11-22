import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const AuthLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar value="auto" />
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </QueryClientProvider>
  )
}

export default AuthLayout


const styles = StyleSheet.create({})