import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale} from 'react-native-size-matters'

// CONSTANTS
import { Colors } from "../constants/Colors"

const ThemedButton = ({warning=false, scale=1, marginTop=0, style, disabled=false, ...props}) => {
  return (
    <Pressable
        style={({ pressed }) => [styles.btn, {marginTop: 100}, disabled && styles.disabled, pressed && !disabled && styles.pressed, warning && {backgroundColor: Colors.warning}, {transform: [{ scale: !disabled && pressed ? scale * 0.85 : scale }]}, style]}
        disabled={disabled}
        {...props}
    />
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: moderateScale(12),
        paddingInline: moderateScale(20),
        borderRadius: 6,
        marginVertical: scale(2),
        marginHorizontal: scale(2),
    },
    pressed: {
        opacity: 0.5
    },
    disabled: {
      opacity: 0.5
    },
})

export default ThemedButton
