import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../constants/Colors'

const ThemedIcons = ({size=10, color=null, style, ...props}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <Ionicons size={moderateScale(size)} style={[{color: color ? color : theme.iconColorFocused}, style]} {...props} />
  )
}

export default ThemedIcons

const styles = StyleSheet.create({})