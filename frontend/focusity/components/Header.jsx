import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// THEMED
import ThemedText from './ThemedText'

// CONSTANTS
import { Colors } from '../constants/Colors'

const Header = ({ text, style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.navBackground,
          paddingTop: insets.top,
          borderBottomColor: theme.text,
          borderTopColor: theme.text
        },
      ]}
    >
      <ThemedText
        style={[
          styles.headerText,
          { color: theme.title },
          style,
        ]}
        {...props}
      >
        {text}
      </ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    justifyContent: 'center',
    paddingLeft: 40,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})

export default Header
