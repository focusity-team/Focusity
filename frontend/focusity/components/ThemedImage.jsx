import { Image, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

const ThemedImage = ({ size=80, source, style, ...props}) => {
  return (
    <Image source={source} style={[{ width: moderateScale(size), height: moderateScale(size) }, style]} {...props} />
  )
}

export default ThemedImage

const styles = StyleSheet.create({})