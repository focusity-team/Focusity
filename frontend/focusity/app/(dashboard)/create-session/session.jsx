import {Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { router } from 'expo-router'

// THEMED
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import ThemedTextInput from '../../../components/ThemedTextInput'
import ThemedButton from '../../../components/ThemedButton'
import Spacer from "../../../components/Spacer"

// CONTEXTS
import { useSessionCreation } from '../../../contexts/SessionContext'

const Session = () => {
    const { session, setTitle, hasReachedStep5 } = useSessionCreation();

    const nextStep = () => {
        router.push("/create-session/segment");
    };

    const prevStep = () => {
        router.replace("/sessions");
    };

    const toRecap = () => {
        router.push("/create-session/recap")
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView container center safe>
                <ThemedText title fontSize={26} bold>Crea una nuova sessione</ThemedText>
            
                <Spacer />
                
                <ThemedTextInput placeholder="Titolo" onChangeText={setTitle} value={session.title} />
            
                <Spacer />
                {session.hasReachedStep5 ? (
          <ThemedButton onPress={toRecap}>
            <ThemedText style={{color: "white"}}>Salva e torna al recap</ThemedText>
          </ThemedButton>
        ) : (
          <ThemedView center row>
            <ThemedButton onPress={prevStep} marginTop={30}>
              <ThemedText style={{color: "white"}}>Indietro</ThemedText>
            </ThemedButton>

            <Spacer width={20} />

            <ThemedButton disabled={!session.title} onPress={nextStep} marginTop={30} >
              <ThemedText style={{color: "white"}}>Avanti</ThemedText>
            </ThemedButton>
          </ThemedView>
        )}
            </ThemedView>
        </TouchableWithoutFeedback>

    )
}

export default Session

const styles = StyleSheet.create({})