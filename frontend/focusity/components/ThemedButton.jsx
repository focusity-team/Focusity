import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { moderateScale, scale} from 'react-native-size-matters'

// CONSTANTS
import { Colors } from "../constants/Colors"

const ThemedButton = ({uiBg=false, noStyle=false, noBg=false, warning=false, scale=1, marginTop=0, paddingVertical=12, style, disabled=false, ...props}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Pressable
        style={({ pressed }) => [!noStyle && styles.btn, {backgroundColor: noBg ? "transparent" : uiBg ? theme.uiBackground : Colors.primary, marginTop: moderateScale(marginTop), paddingVertical: moderateScale(paddingVertical)}, disabled && styles.disabled, pressed && !disabled && styles.pressed, warning && {backgroundColor: Colors.warning}, {transform: [{ scale: !disabled && pressed ? scale * 0.85 : scale }]}, style]}
        disabled={disabled}
        {...props}
    />
  )
}

const styles = StyleSheet.create({
    btn: {
        paddingVertical: moderateScale(12),
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
