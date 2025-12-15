import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { useSessionCreation } from '../../../contexts/SessionContext';
import { router } from 'expo-router'

// THEMED
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import ThemedTextInput from '../../../components/ThemedTextInput'
import ThemedButton from '../../../components/ThemedButton'
import ThemedCard from '../../../components/ThemedCard';
import Spacer from "../../../components/Spacer"

// IMG
import PomodoroTimerImg from "../../../assets/timer/pomodoro-timer-outline.png"
import FlowmodoroTimerImg from "../../../assets/timer/flowmodoro-timer-outline.png"

const TimerPicker = () => {
    const { session, setTimerIndex, hasReachedStep5 } = useSessionCreation();

    const nextStep = () => {
            router.push("/create-session/customizeTimer");
    };

    const prevStep = () => {
            router.push("/create-session/segment");
    };
    
    const toRecap = () => {
        router.push("/create-session/recap")
    }
    
    const cards = [
        { text: 'Pomodoro', img: PomodoroTimerImg },
        { text: 'Flowmodoro', img: FlowmodoroTimerImg },
      ]

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView container center safe>
            <ThemedText title fontSize={26} bold>Scegli il tipo di timer</ThemedText>

            <Spacer />

            <ThemedView center row>
                {cards.map((card, index) => (
                <ThemedCard
                    key={index}
                    text={card.text}
                    img={card.img}
                    selectable
                    selected={session.timerIndex === index}
                    onSelect={() => setTimerIndex(session.timerIndex === index ? null : index)}
                />
                ))}
            </ThemedView>
            
            <Spacer />

            <ThemedView center row>
                {!session.hasReachedStep5 ? (
                <>
                    <ThemedButton onPress={prevStep} marginTop={30}>
                    <ThemedText style={{color: "white"}}>Indietro</ThemedText>
                    </ThemedButton>
                    <Spacer width={20} />
                </>
                ) : (
                <Spacer width={48} />
                )}


                <ThemedButton disabled={session.timerIndex === null} onPress={session.timerIndex !== 1 ? nextStep : toRecap} marginTop={30}>
                    <ThemedText style={{color: "white"}}>{session.timerIndex === 1 ? "Avanti" : "Personalizza"}</ThemedText>
                </ThemedButton>
            </ThemedView>
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default TimerPicker

const styles = StyleSheet.create({})