import { ActivityIndicator, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedActivityIndicator = ({inButton=false}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ActivityIndicator size="large" color={ inButton ? "white" : theme.text} />
  )
}

export default ThemedActivityIndicator

const styles = StyleSheet.create({})