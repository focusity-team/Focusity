import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Settings = () => {
  return (
    <ThemedView container center safe>
      <ThemedText>Settings</ThemedText>
    </ThemedView>
  )
}

export default Settings

const styles = StyleSheet.create({})