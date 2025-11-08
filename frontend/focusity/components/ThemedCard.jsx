import { Image, useColorScheme, StyleSheet, Pressable } from 'react-native'
import React from 'react'

// CONSTANTS
import { Colors } from '../constants/Colors'
import ThemedText from './ThemedText'
import ThemedView from './ThemedView'

const ThemedCard = ({ text, img, selectable = false, selected = false, onSelect, style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  if (!selectable) {
    return (
      <ThemedView style={[{ backgroundColor: theme.navBackground }, styles.container]}>
        <Image source={img} style={{ width: 80, height: 80 }} />
        <ThemedText
          style={[{ color: theme.title }, { fontWeight: "bold", fontSize: 20 }, style]}
          {...props}
        >
          {text}
        </ThemedText>
      </ThemedView>
    )
  }

  return (
    <Pressable onPress={onSelect}>
      <ThemedView
        style={[
          { backgroundColor: theme.navBackground },
          styles.container,
          selected && { borderWidth: 2, borderColor: Colors.primary, backgroundColor: Colors.primarySelection},
        ]}
      >
        <Image source={img} style={{ width: 80, height: 80 }} />
        <ThemedText
          style={[{ color: theme.title }, { fontWeight: "bold", fontSize: 20 }, style]}
          {...props}
        >
          {text}
        </ThemedText>
      </ThemedView>
    </Pressable>
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 2,
    width: 160,
    height: 160,
  },
})