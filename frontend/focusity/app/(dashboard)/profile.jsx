import { StyleSheet, useColorScheme} from 'react-native'
import React, { useState } from 'react'

// THEMED
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from "../../components/Spacer"
import Hr from "../../components/Hr"
import ThemedIcons from '../../components/ThemedIcons'
import ThemedImage from "../../components/ThemedImage"
import { Colors } from '../../constants/Colors'

// IMG
import TempPfp from "../../assets/timer/custom-timer-outline.png"

const Profile = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const [isOnline, setIsOnline] = useState(false)
  const [pfp, setPfp] = useState(TempPfp)
  const [username, setUsername] = useState("[username]")
  const [name, setName] = useState("[name]")
  const [bio, setBio] = useState("[biadsfffffsffffffffadffffffffo]")
  const [todayStudy, setTodayStudy] = useState("[todayStudy]")
  const [dailyAverage, seyDailyAverage] = useState("[dailyAverage]")
  const [selectedBadges, setSelectedBadges] = useState(["[badge1]", "[badge2]", "[badge3]"])

  return (
    <ThemedView container safe={true}>
      <Spacer height={3}/>

      <ThemedView row center>
        <ThemedText fontSize={28} title>{username}</ThemedText>
        <ThemedIcons size={25} style={{position: "absolute", right: "8%"}}  name="settings-sharp" />
      </ThemedView>

      <Spacer height={3}/>
      <Hr />
      <Spacer height={3}/>

      <ThemedView row centerV>
        <Spacer width={2} height={0} />
        <ThemedIcons size={20} name="radio-button-on" color={isOnline ? "green" : theme.placeholderTextColor} />
        <Spacer width={2} height={0} />
        <ThemedImage source={pfp} />

        <Spacer width={2} height={0} />

        <ThemedView width={67} style={{backgroundColor: "gray"}}>
          <ThemedText fontSize={20} title>{name}</ThemedText>
          <Spacer />
          <ThemedView width={67} height={60} fontSize={18} style={{backgroundColor: "red"}}>
            <ThemedText >{bio}</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <Spacer height={10}/>

    <ThemedView row center>
      <ThemedView width={null} style={{ width: 'auto' }} center>
        <ThemedText>today's study hours</ThemedText>
        <ThemedText>{todayStudy}</ThemedText>
      </ThemedView>

      <Spacer width={20} />

      <ThemedView center>
        <ThemedText>daily average</ThemedText>
        <ThemedText>{dailyAverage}</ThemedText>
      </ThemedView>
    </ThemedView>

      <Spacer height={10}/>

      <ThemedText center>Badges</ThemedText>
      <Spacer />
      <ThemedView center row>
        {selectedBadges.map((badge, index) => (
          <React.Fragment key={index}>
            <ThemedText>{badge}</ThemedText>
            <Spacer width={5} />
          </React.Fragment>
        ))}

        <ThemedIcons name="add-circle" size={30}/>
      </ThemedView>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({})