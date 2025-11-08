import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import Header from '../../components/Header'

const AuthLayout = () => {
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </>
  )
}

export default AuthLayout


const styles = StyleSheet.create({})