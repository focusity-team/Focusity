import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors'
import { moderateScale } from 'react-native-size-matters'

// THEMED
import ThemedView from './ThemedView'
import ThemedText from './ThemedText'
import ThemedIcons from './ThemedIcons'
import ThemedTextInput from "./ThemedTextInput"

const ThemedListPicker = ({list=[], searchBar=false, callback}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const [search, setSearch] = useState()

  return (
    <>
        {searchBar && (
            <ThemedView marginBottom={20} height={7} style={{backgroundColor: theme.uiBackground, borderRadius: 20,}} centerV row>
                <ThemedTextInput placeholder="Cerca una materia (es. Matematica)" onChangeText={setSearch} value={search}/>
                <ThemedIcons marginRight={15} size={20} name="search" />
            </ThemedView>
        )}
        {search ? (
            list
                .filter(value => value.toLowerCase().includes(search.toLowerCase()))
                .map((value, index) => (
                <Pressable onPress={() => callback(value)} width="80%" style={({ pressed }) =>[styles.item, {backgroundColor: theme.uiBackground}, {transform: [{ scale: pressed ? 1 * 0.85 : 1 }]}]} key={index}>
                    <ThemedView style={{backgroundColor: "transparent", paddingInline: 10, justifyContent: "space-between"}} centerV row>
                        <ThemedText fontSize={moderateScale(14)} title>{value}</ThemedText>
                        <ThemedIcons size={20} name="chevron-forward" />
                    </ThemedView>
                </Pressable>
            ))
        ) : (
            list.map((value, index) => (
                <Pressable onPress={() => callback(value)} width="80%" style={({ pressed }) =>[styles.item, {backgroundColor: theme.uiBackground}, {transform: [{ scale: pressed ? 1 * 0.85 : 1 }]}]} key={index}>
                    <ThemedView style={{backgroundColor: "transparent", paddingInline: 10, justifyContent: "space-between"}} centerV row>
                        <ThemedText fontSize={moderateScale(14)} title>{value}</ThemedText>
                        <ThemedIcons size={20} name="chevron-forward" />
                    </ThemedView>
                </Pressable>
            ))
        )}
    </>
  )
}

export default ThemedListPicker

const styles = StyleSheet.create({
    item: {
        margin: moderateScale(2),
        paddingVertical: moderateScale(15),
        paddingInline: moderateScale(10),
        borderRadius: 15
    }
})