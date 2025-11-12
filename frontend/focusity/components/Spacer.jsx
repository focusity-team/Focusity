import { StyleSheet, View } from 'react-native'
import React from 'react'
import { responsiveWidth as wp } from 'react-native-responsive-dimensions'

const Spacer = ({width = "0", height = "5"}) => {
  return (
    <View style={{width: wp(width), height: wp(height)}} />
  )
}

export default Spacer

const styles = StyleSheet.create({})