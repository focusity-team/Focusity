import { TextInput, useColorScheme } from "react-native"
import { moderateScale } from "react-native-size-matters"

// CONSTANTS
import { Colors } from "../constants/Colors"

const ThemedTextInput = ({marginBottom=0, style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <TextInput placeholderTextColor={theme.placeholderTextColor} style={[{
        fontSize: moderateScale(14),
        backgroundColor: theme.uiBackground,
        color: theme.title,
        padding: moderateScale(20),
        borderRadius: 20,
        marginBottom: moderateScale(marginBottom),
    }, style]}
    {...props}
    />
  )
}

export default ThemedTextInput