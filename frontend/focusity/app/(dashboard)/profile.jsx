import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// THEMED
import ThemedView from '../../components/ThemedView'

const Profile = () => {
  return (
    <ThemedView safe={true}>
      <Text>Profile</Text>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({})