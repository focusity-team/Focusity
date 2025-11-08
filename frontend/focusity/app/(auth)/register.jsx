import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

// THEMED
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'

// CONSTANTS
import DataValidator from '../../components/DataValidator'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validator = DataValidator({ type: "UserData" });

  const handleSubmit = () => {
    const result = validator.validate({
      username: username,
      email: email,
      password: password,
    })

    if (!result.success) {
      const formattedErrors = {}
      result.errors.forEach(err => {
        formattedErrors[err.path[0]] = err.message
      })
      setErrors(formattedErrors)
      return
    }

    setErrors({})
    console.log("Utente registrato:", username, email, password)
    // API
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ThemedText title={true} style={{ fontWeight: "bold", fontSize: 40 }}>Registrazione</ThemedText>

        <Spacer />

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 10 }}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        {errors.username && <ThemedText warning={true}>{errors.username}</ThemedText>}

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 10 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        {errors.email && <ThemedText warning={true}>{errors.email}</ThemedText>}

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 10 }}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        {errors.password && <ThemedText warning={true}>{errors.password}</ThemedText>}

        <ThemedText style={{ marginBottom: 10 }}>
          Sei già registrato?
          <Link href="/login">
            <ThemedText link={true}> Accedi</ThemedText>
          </Link>
        </ThemedText>

        <ThemedButton disabled={!username || !password || !email} style={{ marginTop: 15 }} scale={1.2} onPress={handleSubmit}>
          <ThemedText style={{ color: "white" }}>Registrati</ThemedText>
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

const styles = StyleSheet.create({})
