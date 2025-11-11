import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { moderateScale } from 'react-native-size-matters'

const ThemedIcons = ({size=10, style, ...props}) => {
  return (
    <Ionicons size={moderateScale(size)} style={style} {...props} />
  )
}

export default ThemedIcons

const styles = StyleSheet.create({})