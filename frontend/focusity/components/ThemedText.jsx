import { Text, useColorScheme } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

// CONSTANTS
import { Colors } from '../constants/Colors'

const ThemedText = ({bold=false, fontSize=14, marginBottom=0, warning=false, style, center=false, title = false, link = false, ...props}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const textColor = title ? theme.title : link ? Colors.primary : warning ? Colors.warning : theme.text

  return (
    <Text style={[{fontSize: moderateScale(fontSize), marginBottom: moderateScale(marginBottom), color: textColor, fontWeight: link ? "bold" : "regular"}, center && {textAlign: "center"}, bold && {fontWeight: "bold"}, style]} {...props} />
  )
}
export default ThemedText