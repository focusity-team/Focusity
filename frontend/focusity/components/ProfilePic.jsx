import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';

const ProfilePic = ({ size=80, source, style, ...props}) => {
  return (
    <Image source={source} style={[{ width: moderateScale(size), height: moderateScale(size) }, style]} {...props} />
  )
}

export default ProfilePic

const styles = StyleSheet.create({})