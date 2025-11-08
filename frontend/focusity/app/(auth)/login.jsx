import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import {useState} from "react"

// THEMED
import ThemedTextInput from "../../components/ThemedTextInput"
import ThemedButton from '../../components/ThemedButton'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

// CONSTANTS
import DataValidator from '../../components/DataValidator'

// CUSTOM HOOKS
import useUser from "../../hooks/useUser"


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  
  const validator = DataValidator({ type: "UserData" });

  const { user } = useUser()

  const handleSubmit = () => {
    const result = validator.validate({
        username: username,
        password: password,
    });

    if (!result.success) {
      const formattedErrors = {}
      result.errors.forEach(err => {
        formattedErrors[err.path[0]] = err.message
      })
      setErrors(formattedErrors)
      return
    }

    setErrors({})
    console.log("current user:", user)
    console.log("user logged:", username, password)
    // API
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <ThemedText title={true} style={{fontWeight: "bold", fontSize: 40}}>Login</ThemedText>

          <Spacer />

          <ThemedTextInput
            style={{width: "80%", marginBottom: 20}}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
          {errors.username && <ThemedText warning={true}>{errors.username}</ThemedText>}

          <ThemedTextInput
            style={{width: "80%", marginBottom: 20}}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          {errors.password && <ThemedText warning={true}>{errors.password}</ThemedText>}

          <ThemedText style={{marginBottom: 10}}>
              Non hai ancora un account?
              <Link href="/register">
                <ThemedText link={true}> Registrati</ThemedText>
              </Link>
          </ThemedText>

          <ThemedButton style={{marginTop: 15}} scale="1.2" onPress={handleSubmit}>
            <ThemedText style={{color: "white"}}>Accedi</ThemedText>
          </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({})