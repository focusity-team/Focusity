import { StyleSheet } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

// THEMED
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'

const Sessions = () => {
  return (
    <ThemedView safe={true}>
        <ThemedText>Sessions</ThemedText>

        <ThemedButton onPress={() => router.push("/create-session/session")}>
            <ThemedText title>Nuova Sessione</ThemedText>
        </ThemedButton>
    </ThemedView>
  )
}

export default Sessions

const styles = StyleSheet.create({})