import { Text, useColorScheme } from 'react-native'
import React from 'react'

// CONSTANTS
import { Colors } from '../constants/Colors'

const ThemedText = ({warning=false, style, title = false, link = false, ...props}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const textColor = title ? theme.title : link ? Colors.primary : warning ? Colors.warning : theme.text

  return (
    <Text style={[{color: textColor, fontWeight: link ? "bold" : "regular"}, style]} {...props} />
  )
}
export default ThemedText