import { Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSessionCreation } from '../../../contexts/SessionContext'
import { moderateScale } from 'react-native-size-matters'
import { router } from 'expo-router'

// THEMED
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import ThemedTextInput from '../../../components/ThemedTextInput'
import ThemedButton from '../../../components/ThemedButton'
import Spacer from "../../../components/Spacer"
import Hr from '../../../components/Hr'

const Recap = () => {
    const {session, resetSession, setHasReachedStep5} = useSessionCreation()

    const nextStep = () => {
        router.replace("/session")
    }

    const cancel = () => {
        resetSession()
        router.replace("/(dashboard)/sessions")
    }

    const toSession = () => {
        router.push("/create-session/session")
    }

    const toSegment = () => {
        router.push("/create-session/segment")
    }

    const toTimerPicker = () => {
        router.push("/create-session/timerPicker")
    }

    useEffect(() => {
        setHasReachedStep5(true)
    }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView container center safe>
            <ThemedText title fontSize={26} bold>Recap</ThemedText>
            
            <Spacer height={20} />

            <ThemedView center row>
                <ThemedText style={styles.recap} title>Titolo sessione: </ThemedText>
                <ThemedText style={styles.recap} >{session.title}</ThemedText>
            </ThemedView>

            <Pressable onPress={toSession}>
                <ThemedText link>  Modifica</ThemedText>
            </Pressable>

            <Hr width='85%'/>

            <ThemedView center row>
                <ThemedText style={styles.recap} title>Materia: </ThemedText>
                <ThemedText style={styles.recap}>{session.subject}</ThemedText>
            </ThemedView>

            <ThemedView center row>
                <ThemedText style={styles.recap} title>Topic: </ThemedText>
                <ThemedText style={styles.recap}>{session.topic}</ThemedText>
            </ThemedView>

            <Pressable onPress={toSegment}>
                <ThemedText link>  Modifica</ThemedText>
            </Pressable>

            <Hr width='85%'/>

            <ThemedView center row>
                <ThemedText style={styles.recap} title>Timer: </ThemedText>
                <ThemedText style={styles.recap}>
                {session.timerIndex === 0 ? (
                    `Pomodoro (${session.studyTime}, ${session.shortBreak}, ${session.longBreak}, ${session.numCycles})`
                ) :
                    "Flowmodoro"
                }
                </ThemedText>
            </ThemedView>

            <Pressable onPress={toTimerPicker}>
                <ThemedText link>  Modifica</ThemedText>
            </Pressable>

            <Hr width='85%'/>
            <ThemedView center row >
                <ThemedButton warning onPress={cancel} marginTop={30}>
                    <ThemedText style={{color: "white"}}>Annulla</ThemedText>
                </ThemedButton>

                <Spacer width={20} />

                <ThemedButton onPress={nextStep} marginTop={30}>
                    <ThemedText style={{color: "white"}}>Inizia sessione</ThemedText>
                </ThemedButton>
            </ThemedView>    
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Recap

const styles = StyleSheet.create({
  recap: {
    fontSize: moderateScale(20)
  },
})