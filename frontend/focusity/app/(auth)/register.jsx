import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

// THEMED
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'

// CONSTANTS
import DataValidator from '../../components/DataValidator'
import { register } from '../../api/auth'
import ThemedActivityIndicator from '../../components/ThemedActivityIndicator'

import { useRegister } from '../../hooks/useAuth'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [isRegistering, setIsRegistering] = useState(false)

  const registerMutation = useRegister();
  
  const validator = DataValidator({ type: "UserData" });

  const handleSubmit = async () => {
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
    console.log("Utente credenziali:", username, email, password)
    
    setIsRegistering(true)
    try {
      const userData = await registerMutation.mutateAsync({ username, email, password });
      console.log('utente registrato', userData);
      router.replace('/(dashboard)/profile');
    } catch (err) {
      setErrors({ wrongCredentials: "Credenziali sbagliate" });
    } finally {
      setIsRegistering(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView container center>
        <ThemedText title={true} fontSize={38} bold>Registrazione</ThemedText>

        <Spacer />

        <ThemedTextInput
          marginBottom={10}
          style={{ width: "80%" }}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        {errors.username && <ThemedText warning={true}>{errors.username}</ThemedText>}

        <ThemedTextInput
          marginBottom={10}
          style={{ width: "80%"}}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        {errors.email && <ThemedText warning={true}>{errors.email}</ThemedText>}

        <ThemedTextInput
          marginBottom={10}
          style={{ width: "80%"}}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        {errors.password && <ThemedText warning={true}>{errors.password}</ThemedText>}

        <ThemedText>
          Sei già registrato?
          <Link href="/login">
            <ThemedText link={true}> Accedi</ThemedText>
          </Link>
        </ThemedText>

        <ThemedButton marginTop={30} disabled={!username || !password || isRegistering || registerMutation.isLoading}  scale={1.2} onPress={handleSubmit}>
            {isRegistering ? (
              <ThemedActivityIndicator inButton />
            ) : (
              <ThemedText disabled={isRegistering} style={{color: "white"}}>Registrati</ThemedText>
            )}
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

const styles = StyleSheet.create({})
