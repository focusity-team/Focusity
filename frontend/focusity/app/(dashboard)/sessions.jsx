import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

// THEMED
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'

const Sessions = () => {
  return (
    <ThemedView safe={true}>
        <ThemedText>Sessions</ThemedText>

        <ThemedButton>
            <Link href="/createSession">Nuova Sessione</Link>
        </ThemedButton>
    </ThemedView>
  )
}

export default Sessions

const styles = StyleSheet.create({})