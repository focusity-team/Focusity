import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSessionCreation } from '../../../contexts/SessionContext';
import { router } from 'expo-router';

// THEMED
import ThemedText from '../../../components/ThemedText';
import ThemedView from '../../../components/ThemedView'
import ThemedIcons from "../../../components/ThemedIcons"
import ThemedListPicker from '../../../components/ThemedListPicker';
import Hr from "../../../components/Hr"

const Subject = () => {
    const { session, setSubject} = useSessionCreation();

    const selectSubject = (subj) => {
        setSubject(subj)
        router.back()
    }

    const subjects = [
        "Matematica",
        "Analisi 3",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano","Matematica",
        "Informatica",
        "Italiano",
        "zzz",
    ]

  return (
    <ThemedView safe container center>
        <ThemedText marginTop={5} fontSize={38} bold title>Seleziona materia</ThemedText>
        <Hr />
        <ThemedView style={{width: "100%"}} container center>
            <ScrollView contentContainerStyle={{alignItems: "center"}} style={{width:"100%"}}>
                <ThemedListPicker searchBar callback={selectSubject} list={subjects}/>
            </ScrollView>
        </ThemedView>
    </ThemedView>
  )
}

export default Subject