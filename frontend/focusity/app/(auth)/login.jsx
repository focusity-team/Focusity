import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Link, router } from 'expo-router'
import {useRef, useState} from "react"

// THEMED
import ThemedTextInput from "../../components/ThemedTextInput"
import ThemedButton from '../../components/ThemedButton'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedActivityIndicator from '../../components/ThemedActivityIndicator'

// CONSTANTS
import DataValidator from '../../components/DataValidator'

// HOOKS
import { useLogin } from "../../hooks/useAuth"


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [isLogging, setIsLogging] = useState(false)
  
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const validator = DataValidator({ type: "UserData" });
  
  const loginMutation = useLogin();

  const handleSubmit = async () => {
    usernameRef.current?.blur();
    passwordRef.current?.blur();
    Keyboard.dismiss();

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
    
    console.log("user credentials:", username, password)
  
    setIsLogging(true)
    try {
      const userData = await loginMutation.mutateAsync({ username, password });
      console.log('utente loggato', userData);
      router.replace('/(dashboard)/profile');
    } catch (err) {
      setErrors({ wrongCredentials: "Credenziali sbagliate" });
    } finally {
      setIsLogging(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView container center>
          <ThemedText title={true} fontSize={38} bold>Login</ThemedText>

          <Spacer />

          <ThemedTextInput
            ref={usernameRef}
            marginBottom={20}
            width="80%"
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
            autoComplete="username"
            textContentType="username"
            autoCapitalize="none"
            importantForAutofill="yes"
          />
          {errors.username && <ThemedText warning={true}>{errors.username}</ThemedText>}

          <ThemedTextInput
            ref={passwordRef}
            width="80%"
            marginBottom={20}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            autoComplete="password"
            textContentType="password"
            importantForAutofill="yes"
          />
          {errors.password && <ThemedText warning={true}>{errors.password}</ThemedText>}
          {errors.wrongCredentials && <ThemedText warning={true}>{errors.wrongCredentials}</ThemedText>}

          <ThemedText >
              Non hai ancora un account?
              <Link href="/register">
                <ThemedText link={true}> Registrati</ThemedText>
              </Link>
          </ThemedText>
          <ThemedButton marginTop={30} disabled={!username || !password || isLogging || loginMutation.isLoading}  scale={1.2} onPress={handleSubmit}>
            {loginMutation.isLoading ? (
              <ThemedActivityIndicator inButton />
            ) : (
              <ThemedText style={{color: "white"}}>Accedi</ThemedText>
            )}
          </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({})