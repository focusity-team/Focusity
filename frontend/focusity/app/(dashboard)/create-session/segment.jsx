import { Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { useSessionCreation } from '../../../contexts/SessionContext';
import { router } from 'expo-router';

// THEMED
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import ThemedTextInput from '../../../components/ThemedTextInput'
import ThemedButton from '../../../components/ThemedButton'
import Spacer from "../../../components/Spacer"
import ThemedIcons from '../../../components/ThemedIcons';
import { moderateScale } from 'react-native-size-matters';

const Segment = () => {
  const { session, setSubject, setTopic, hasReachedStep5 } = useSessionCreation();

  const nextStep = () => {
    router.push("/create-session/timerPicker");
  };

  const prevStep = () => {
    router.push("/create-session/session");
  };
  
  const toRecap = () => {
    router.push("/create-session/recap")
  }

  const toSubject = () => {
    router.push("/create-session/subject")
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView container center safe>
        <ThemedText title fontSize={26} bold>Segmento 1</ThemedText>

        <Spacer />
        
        <ThemedButton paddingVertical={18} uiBg marginBottom={15} onPress={toSubject} width="80%">
          <ThemedView style={{backgroundColor: "transparent"}} row>
            <ThemedText title={session.subject} fontSize={15}>{session.subject || "Seleziona Materia"}</ThemedText>
            <ThemedIcons style={{position: "absolute", right: "0"}} size={20} name="chevron-forward" />
          </ThemedView>
        </ThemedButton>

        {/* <ThemedTextInput marginBottom={20} placeholder="Materia (es. Matematica)" onChangeText={setSubject} value={session.subject} /> */}

        <ThemedTextInput placeholder="Topic (es. Moltiplicazioni)" onChangeText={setTopic} value={session.topic} />

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

            <ThemedButton disabled={!session.topic || !session.subject} onPress={nextStep} marginTop={30} >
              <ThemedText style={{color: "white"}}>Avanti</ThemedText>
            </ThemedButton>
          </ThemedView>
        )}
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Segment

const styles = StyleSheet.create({})