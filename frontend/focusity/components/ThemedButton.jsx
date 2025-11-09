import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// CONSTANTS
import { Colors } from "../constants/Colors"

const ThemedButton = ({warning=false, scale=1, style, disabled=false, ...props}) => {
  return (
    <Pressable
        style={({ pressed }) => [styles.btn, disabled && styles.disabled, pressed && !disabled && styles.pressed, warning && {backgroundColor: Colors.warning}, {transform: [{ scale: !disabled && pressed ? scale * 0.85 : scale }]}, style]}
        disabled={disabled}
        {...props}
    />
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 12,
        paddingInline: 20,
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 15,
    },
    pressed: {
        opacity: 0.5
    },
    disabled: {
      opacity: 0.5
    },
})

export default ThemedButton
