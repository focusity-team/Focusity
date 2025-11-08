import { TextInput, useColorScheme } from "react-native"
import { Colors } from "../constants/Colors"

const ThemedTextInput = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <TextInput placeholderTextColor={theme.placeholderTextColor} style={[{
        backgroundColor: theme.uiBackground,
        color: theme.title,
        padding: 20,
        borderRadius: 20,
    }, style]}
    {...props}
    />
  )
}

export default ThemedTextInput