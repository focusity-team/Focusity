import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useSessionCreation } from '../../../contexts/SessionContext'
import { router } from 'expo-router'


// THEMED
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import ThemedTextInput from '../../../components/ThemedTextInput'
import ThemedButton from '../../../components/ThemedButton'
import Spacer from "../../../components/Spacer"
import ThemedNumInput from "../../../components/ThemedNumInput"
import DataValidator from '../../../components/DataValidator'

const CustomizeTimer = () => {
    const {session, setStudyTime, setShortBreak, setLongBreak, setNumCycles, hasReachedStep5} = useSessionCreation()

    const nextStep = () => {
        router.push("/create-session/recap");
    };

    const prevStep = () => {
        router.push("/create-session/timerPicker");
    };

    const resetTimerValues = () => {
        setStudyTime(25)
        setShortBreak(5)
        setLongBreak(15)
        setNumCycles(4)
        setErrors({})
    }

    const [errors, setErrors] = useState({})
    
    const validator = DataValidator({ type: "TimerValueData" });

    const validateTimerValues = () => {
        const result = validator.validate({
            studyTime: session.studyTime,
            shortBreak: session.shortBreak,
            longBreak: session.longBreak,
            numCycles: session.numCycles,
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
        nextStep()
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView container center safe>
            <ThemedText title fontSize={26} bold>Personalizza pomodoro</ThemedText>

            <Spacer />

            <ThemedText fontSize={18} title>Pomodoro (minuti)</ThemedText>
            <ThemedView center row>
                <ThemedNumInput center width="70%" placeholder="Durata pomodoro (es. 25)" onChangeText={setStudyTime} value={session.studyTime} />
            </ThemedView>
            {errors.studyTime && <ThemedText warning>{errors.studyTime}</ThemedText>}


            <ThemedText marginTop={15} fontSize={18} title>Pausa corta (minuti)</ThemedText>
            <ThemedView center row>
                <ThemedNumInput center width="70%" placeholder="Durata pausa corta (es. 5)" onChangeText={setShortBreak} value={session.shortBreak} />
            </ThemedView>
            {errors.shortBreak && <ThemedText warning>{errors.shortBreak}</ThemedText>}
            

            <ThemedText marginTop={15} fontSize={18} title>Pausa lunga (minuti)</ThemedText>
            <ThemedView center row>
                <ThemedNumInput  center width="70%" placeholder="Durata pausa lunga (es. 15)" onChangeText={setLongBreak} value={session.longBreak} />
            </ThemedView>
            {errors.longBreak && <ThemedText warning>{errors.longBreak}</ThemedText>}
            

            <ThemedText marginTop={15} fontSize={18} title>Cicli prima della pausa lunga</ThemedText>
            <ThemedView center row>
                <ThemedNumInput center width="70%" placeholder="Cicli prima della pausa lunga (es. 4)" onChangeText={setNumCycles} value={session.numCycles} />
            </ThemedView>
            {errors.numCycles && <ThemedText warning>{errors.numCycles}</ThemedText>}
            
            <Spacer />
            
            <ThemedView center row>
                <ThemedButton onPress={prevStep} marginTop={30}>
                <ThemedText style={{color: "white"}}>Indietro</ThemedText>
                </ThemedButton>


                <ThemedButton warning onPress={resetTimerValues} marginTop={30}>
                <ThemedText style={{color: "white"}}>Resetta a default</ThemedText>
                </ThemedButton>


                <ThemedButton disabled={!session.studyTime || !session.shortBreak || !session.longBreak || !session.numCycles} onPress={validateTimerValues} marginTop={30}>
                <ThemedText style={{color: "white"}}>Avanti</ThemedText>
                </ThemedButton>
            </ThemedView>
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default CustomizeTimer

const styles = StyleSheet.create({})