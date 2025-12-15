import { StyleSheet, useColorScheme} from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'

// API
import api from "../../api/api"

// THEMED
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from "../../components/Spacer"
import Hr from "../../components/Hr"
import ThemedIcons from '../../components/ThemedIcons'
import ThemedImage from "../../components/ThemedImage"
import { Colors } from '../../constants/Colors'
import ThemedButton from "../../components/ThemedButton"
import ThemedActivityIndicator from "../../components/ThemedActivityIndicator"

// HOOKS
import { useProfile } from '../../hooks/useProfile'

const Profile = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  /*
  const [isLoading, setIsLoading] = useState(true)


  const [isOnline, setIsOnline] = useState(false)
  const [pfp, setPfp] = useState(TempPfp)
  const [username, setUsername] = useState("[username]")
  const [name, setName] = useState("[name]")
  const [bio, setBio] = useState("[biadsfffffsffffffffadffffffffo]")
  const [todayStudy, setTodayStudy] = useState("[todayStudy]")
  const [dailyAverage, seyDailyAverage] = useState("[dailyAverage]")
  const [selectedBadges, setSelectedBadges] = useState(["[badge1]", "[badge2]", "[badge3]"])

  useEffect(() => {
    const getProfileData = async () => {
        const res = await api.get("/profile/current")
          .then(res => {
            setName(res.data.name)
            setBio(res.data.description)
            setPfp(res.data.pfp)
          })
          .catch(err => console.error("ERRORE", err));

        setIsLoading(false)
    }

    getProfileData()
  }, [])

  if (isLoading) return(
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ThemedActivityIndicator />
    </ThemedView>
  )
  */

  const {data: profile, isLoading, error} = useProfile()

  const pfpList = {
    1: require('../../assets/pfp/1.png'),
    2: require('../../assets/pfp/2.png'),
    3: require('../../assets/pfp/3.png'),
  };
  
  if (isLoading)
    return (
  <ThemedView container center safe>
        <ThemedActivityIndicator />
      </ThemedView>
    );
    
    if (error)
      return (
    <ThemedView container center safe>
        <ThemedText>Error loading profile</ThemedText>
      </ThemedView>
    );
    
  const pfp = pfpList[1]

  return (
    <ThemedView container safe>
      <Spacer height={3}/>

      <ThemedView row center>
        <ThemedText fontSize={28} title>{profile.username="[username]"}</ThemedText>
        <ThemedButton style={{position: "absolute", right: "8%"}} noStyle noBg onPress={() => router.push("/settings")}>
          <ThemedIcons size={25} name="menu" />
        </ThemedButton>
      </ThemedView>

      <Spacer height={3}/>
      <Hr />
      <Spacer height={3}/>

      <ThemedView row centerV>
        <Spacer width={2} height={0} />
        <ThemedIcons size={20} name="radio-button-on" color={"green"} />
        <Spacer width={2} height={0} />
        <ThemedImage source={pfp} />

        <Spacer width={2} height={0} />

        <ThemedView width={67} style={{backgroundColor: "gray"}}>
          <ThemedText fontSize={20} title>{profile.name}</ThemedText>
          <Spacer />
          <ThemedView width={67} height={60} fontSize={18} style={{backgroundColor: "red"}}>
            <ThemedText >{profile.description}</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <Spacer height={10}/>

    <ThemedView row center>
      <ThemedView width={null} style={{ width: 'auto' }} center>
        <ThemedText>today's study hours</ThemedText>
        <ThemedText>"[study]"</ThemedText>
      </ThemedView>

      <Spacer width={20} />

      <ThemedView center>
        <ThemedText>daily average</ThemedText>
        <ThemedText>"[dailyavg]"</ThemedText>
      </ThemedView>
    </ThemedView>

      <Spacer height={10}/>

      <ThemedText center>Badges</ThemedText>
      <Spacer />
      <ThemedView center row>
        {/*selectedBadges.map((badge, index) => (
          <React.Fragment key={index}>
            <ThemedText>`[badge ${index}]`</ThemedText>
            <Spacer width={5} />
          </React.Fragment>
        ))*/}

        <ThemedText>badge 1</ThemedText>
        <Spacer width={5} />
        <ThemedText>badge 2</ThemedText>
        <Spacer width={5} />
        <ThemedText>badge 3</ThemedText>
        <Spacer width={5} />
        <ThemedIcons name="add-circle" size={30}/>
      </ThemedView>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({})