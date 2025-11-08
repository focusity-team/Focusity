import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// CONSTANTS
import { Colors } from "../constants/Colors"

const ThemedButton = ({scale=1, style, ...props}) => {
  return (
    <Pressable
        style={({ pressed }) => [{transform: `scale(${scale})`,},styles.btn, pressed && styles.pressed, style]}
        {...props}
    />
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 12,
        paddingInline: 18,
        borderRadius: 6,
        marginVertical: 10
    },
    pressed: {
        opacity: 0.5
    }
})

export default ThemedButton
