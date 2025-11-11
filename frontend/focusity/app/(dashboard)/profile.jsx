import { StyleSheet, useColorScheme} from 'react-native'
import React, { useState } from 'react'

// THEMED
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ProfilePic from '../../components/ProfilePic'
import Spacer from "../../components/Spacer"
import Hr from "../../components/Hr"
import ThemedIcons from '../../components/ThemedIcons'

// IMG
import TempPfp from "../../assets/timer/custom-timer-outline.png"
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'

const Profile = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const [isOnline, setIsOnline] = useState(false)
  const [pfp, setPfp] = useState(TempPfp)
  const [username, setUsername] = useState("[username]")
  const [name, setName] = useState("[name]")
  const [bio, setBio] = useState("[biadsfffffsffffffffadffffffffo]")

  return (
    <ThemedView container safe={true}>
      <Spacer height={20} />

      <ThemedView row center>
        <ThemedText fontSize={28} title>{username}</ThemedText>
        <ThemedIcons size={25} style={{position: "absolute", right: "8%"}}  name="settings-sharp" />
      </ThemedView>

      <Spacer height={10} />
      <Hr />
      <Spacer height={10} />

      <ThemedView row centerV>
        <Spacer width={2} height={0} />
        <ThemedIcons size={20} name="radio-button-on" color={isOnline ? "green" : theme.placeholderTextColor} />
        <Spacer width={2} height={0} />
        <ProfilePic source={pfp} />

        <Spacer width={2} height={0} />

        <ThemedView width={67} style={{backgroundColor: "gray"}}>
          <ThemedText style={{height: 28, fontSize: 20}} title>{name}</ThemedText>
          <ThemedView width={67} style={{ height: 60, backgroundColor: "red"}}>
            <ThemedText >{bio}</ThemedText>
          </ThemedView>
        </ThemedView>

      </ThemedView>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({})