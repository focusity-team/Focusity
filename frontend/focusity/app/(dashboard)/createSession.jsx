import { Keyboard, Pressable, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useFocusEffect } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

// THEMED
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedNumInput from '../../components/ThemedNumInput'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedCard from '../../components/ThemedCard'

// CONSTANTS
import DataValidator from '../../components/DataValidator'

// IMG
import PomodoroTimerImg from "../../assets/timer/pomodoro-timer-outline.png"
import FlowmodoroTimerImg from "../../assets/timer/flowmodoro-timer-outline.png"
import Hr from '../../components/Hr'


const CreateSession = () => {
  const [title, setTitle] = useState("Sessione 1")
  const [topic, setTopic] = useState("")
  const [subject, setSubject] = useState("")
  
  const [studyTime, setStudyTime] = useState(25)
  const [shortBreak, setShortBreak] = useState(5)
  const [longBreak, setLongBreak] = useState(15)
  const [numCycles, setNumCycles] = useState(4)

  const [step, setStep] = useState(1)
  const [hasReachedStep5, setHasReachedStep5] = useState(false)

  useEffect(() => {
    if ((hasReachedStep5 === false) && (step === 5)) {
      setHasReachedStep5(true)
    }
  }, [step])

  
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const cancel = () => {
    reset()
    setStep(1)
  }
  const reset = () => {
    setTitle("Sessione 1")
    setTopic("")
    setSubject("")
    setStudyTime(25)
    setShortBreak(5)
    setLongBreak(15)
    setNumCycles(4)
    setStep(1)
    setHasReachedStep5(false)
    setTimerIndex(null)
  }

  const resetTimerValues = () => {
    setStudyTime(25)
    setShortBreak(5)
    setLongBreak(15)
    setNumCycles(4)
    setErrors({})
  }
  
  const prevStepAndResetTimerValues = () => {
    resetTimerValues()
    prevStep()
  }
  const toSession = () => setStep(1)
  const toSegment = () => setStep(2)
  const toTimerPicker = () => setStep(3)
  const toRecap = () => setStep(5)

  const [errors, setErrors] = useState({})

  const validateTimerValues = () => {
    const result = validator.validate({
        studyTime: studyTime,
        shortBreak: shortBreak,
        longBreak: longBreak,
        numCycles: numCycles,
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
  
  const [timerIndex, setTimerIndex] = useState(null)
  
  useFocusEffect(
    useCallback(() => {
      return () => {
        reset()
      }
    }, [])
  )

  const cards = [
    { text: 'Pomodoro', img: PomodoroTimerImg },
    { text: 'Flowmodoro', img: FlowmodoroTimerImg },
  ]

  const validator = DataValidator({ type: "TimerValueData" });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container} safe={true}>
        {step === 1 && (
          <>
            <ThemedText title={true} style={{fontWeight: "bold", fontSize: 30}}>Crea una nuova sessione {hasReachedStep5}</ThemedText>

            <Spacer />
            
            <ThemedTextInput style={styles.textInput} placeholder="Titolo" onChangeText={setTitle} value={title} />

            <Spacer height={20} />

            {hasReachedStep5 ? (
              <ThemedButton onPress={toRecap}>
                <ThemedText style={{color: "white"}}>Salva e torna al recap</ThemedText>
              </ThemedButton>
              ) : (
                <ThemedView style={styles.rowContainer}>
                  <Spacer width="48%" />

                  <ThemedButton disabled={!title} onPress={nextStep} style={{marginTop: 30}}>
                    <ThemedText style={{color: "white"}}>Avanti</ThemedText>
                  </ThemedButton>
                </ThemedView>
              )
            }
          </>
        )}

        {step === 2 && (
          <>
            <ThemedText title={true} style={{fontWeight: "bold", fontSize: 30}}>Segmento 1</ThemedText>

            <Spacer />
            
            <ThemedTextInput style={styles.textInput} placeholder="Materia (es. Matematica)" onChangeText={setSubject} value={subject} />

            <Spacer height={20} />

            <ThemedTextInput style={styles.textInput} placeholder="Topic (es. Moltiplicazioni)" onChangeText={setTopic} value={topic} />

            <Spacer height={20} />

            {hasReachedStep5 ? (
              <ThemedButton onPress={toRecap}>
                <ThemedText style={{color: "white"}}>Salva e torna al recap</ThemedText>
              </ThemedButton>
            ) : (
              <ThemedView style={styles.rowContainer}>
                <ThemedButton onPress={prevStep} style={{marginTop: 30}}>
                  <ThemedText style={{color: "white"}}>Indietro</ThemedText>
                </ThemedButton>

                <Spacer width="20%" />

                <ThemedButton disabled={!topic || !subject} onPress={nextStep} style={{marginTop: 30}}>
                  <ThemedText style={{color: "white"}}>Avanti</ThemedText>
                </ThemedButton>
              </ThemedView>
            )}
          </>
        )}

        {step === 3 && (
          <>
            <ThemedText title={true} style={{fontWeight: "bold", fontSize: 30}}>Scegli il tipo di timer</ThemedText>

            <Spacer />

            <ThemedView style={styles.rowContainer}>
              {cards.map((card, index) => (
                <ThemedCard
                  key={index}
                  text={card.text}
                  img={card.img}
                  selectable
                  selected={timerIndex === index}
                  onSelect={() => setTimerIndex(timerIndex === index ? null : index)}
                />
              ))}
            </ThemedView>
            

            <Spacer height={20} />

            <ThemedView style={styles.rowContainer}>
              {!hasReachedStep5 ? (
                <>
                  <ThemedButton onPress={prevStep} style={{marginTop: 30}}>
                    <ThemedText style={{color: "white"}}>Indietro</ThemedText>
                  </ThemedButton>
                  <Spacer width="20%" />
                </>
              ) : (
                <Spacer width="48%" />
              )}


                <ThemedButton disabled={timerIndex === null} onPress={timerIndex !== 1 ? nextStep : toRecap} style={{marginTop: 30}}>
                  <ThemedText style={{color: "white"}}>{timerIndex === 1 ? "Avanti" : "Personalizza"}</ThemedText>
                </ThemedButton>
              </ThemedView>
          </>
        )}

        {step === 4 && (
          <>
            {timerIndex === 0 && (
              <>
                <ThemedText title={true} style={{fontWeight: "bold", fontSize: 30}}>Personalizza pomodoro</ThemedText>

                <Spacer />

                <ThemedText style={{fontSize: 20}} title>Pomodoro (minuti)</ThemedText>
                <ThemedView style={styles.rowContainer}>
                  <ThemedNumInput style={{textAlign: "center"}} width="70%" placeholder="Durata pomodoro (es. 25)" onChangeText={setStudyTime} value={studyTime} />
                </ThemedView>
                {errors.studyTime && <ThemedText warning={true}>{errors.studyTime}</ThemedText>}

                <Spacer height="22"/>

                <ThemedText style={{fontSize: 20}} title>Pausa corta (minuti)</ThemedText>
                <ThemedView style={styles.rowContainer}>
                  <ThemedNumInput style={{textAlign: "center"}} width="70%" placeholder="Durata pausa corta (es. 5)" onChangeText={setShortBreak} value={shortBreak} />
                </ThemedView>
                {errors.shortBreak && <ThemedText warning={true}>{errors.shortBreak}</ThemedText>}
                
                <Spacer height="22"/>

                <ThemedText style={{fontSize: 20}} title>Pausa lunga (minuti)</ThemedText>
                <ThemedView style={styles.rowContainer}>
                  <ThemedNumInput style={{textAlign: "center"}} width="70%" placeholder="Durata pausa lunga (es. 15)" onChangeText={setLongBreak} value={longBreak} />
                </ThemedView>
                {errors.longBreak && <ThemedText warning={true}>{errors.longBreak}</ThemedText>}
                
                <Spacer height="22"/>

                <ThemedText style={{fontSize: 20}} title>Cicli prima della pausa lunga</ThemedText>
                <ThemedView style={styles.rowContainer}>
                  <ThemedNumInput style={{textAlign: "center"}} width="70%" placeholder="Cicli prima della pausa lunga (es. 4)" onChangeText={setNumCycles} value={numCycles} />
                </ThemedView>
                {errors.numCycles && <ThemedText warning={true}>{errors.numCycles}</ThemedText>}
                
                <Spacer width="20%" />

                <Spacer height={20} />

                <ThemedView style={styles.rowContainer}>
                  <ThemedButton onPress={prevStepAndResetTimerValues} style={{marginTop: 30}}>
                    <ThemedText style={{color: "white"}}>Indietro</ThemedText>
                  </ThemedButton>

                  <Spacer width="2%" />

                  <ThemedButton warning onPress={resetTimerValues} style={{marginTop: 30}}>
                    <ThemedText style={{color: "white"}}>Resetta a default</ThemedText>
                  </ThemedButton>

                  <Spacer width="2%" />

                  <ThemedButton disabled={!studyTime || !shortBreak || !longBreak || !numCycles} onPress={validateTimerValues} style={{marginTop: 30}}>
                    <ThemedText style={{color: "white"}}>Avanti</ThemedText>
                  </ThemedButton>
                </ThemedView>
              </>
            )}
          </>
        )}

        {step === 5 && (
          <>
            <ThemedText title={true} style={{fontWeight: "bold", fontSize: 30}}>Recap</ThemedText>
            
            <Spacer height={20} />

            <ThemedView style={styles.rowContainer}>
              <ThemedText style={styles.recap} title>Titolo sessione: </ThemedText>
              <ThemedText style={styles.recap} >{title}</ThemedText>
            </ThemedView>

            <Pressable onPress={toSession}>
              <ThemedText link>  Modifica</ThemedText>
            </Pressable>

            <Hr width='85%'/>

            <ThemedView style={styles.rowContainer}>
              <ThemedText style={styles.recap} title>Materia: </ThemedText>
              <ThemedText style={styles.recap}>{subject}</ThemedText>
            </ThemedView>

            <ThemedView style={styles.rowContainer}>
              <ThemedText style={styles.recap} title>Topic: </ThemedText>
              <ThemedText style={styles.recap}>{topic}</ThemedText>
            </ThemedView>

            <Pressable onPress={toSegment}>
              <ThemedText link>  Modifica</ThemedText>
            </Pressable>

            <Hr width='85%'/>

            <ThemedView style={styles.rowContainer}>
              <ThemedText style={styles.recap} title>Timer: </ThemedText>
              <ThemedText style={styles.recap}>
                {timerIndex === 0 ? (
                  `Pomodoro (${studyTime}, ${shortBreak}, ${longBreak}, ${numCycles})`
                ) :
                  timerIndex === 1 ? "Flowmodoro" :
                  `Custom (${studyTime}, ${shortBreak}, ${longBreak}, ${numCycles})`
                }
              </ThemedText>
            </ThemedView>

            <Pressable onPress={toTimerPicker}>
              <ThemedText link>  Modifica</ThemedText>
            </Pressable>

            <Hr width='85%'/>
            <ThemedView style={styles.rowContainer}>
                <ThemedButton warning onPress={cancel} style={{marginTop: 30}}>
                  <ThemedText style={{color: "white"}}>Annulla</ThemedText>
                </ThemedButton>

                <Spacer width="20%" />

                <ThemedButton onPress={nextStep} style={{marginTop: 30}}>
                  <ThemedText style={{color: "white"}}>Inizia sessione</ThemedText>
                </ThemedButton>
              </ThemedView>    
          </>
        )}
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default CreateSession

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  recap: {
    fontSize: 20
  },
})