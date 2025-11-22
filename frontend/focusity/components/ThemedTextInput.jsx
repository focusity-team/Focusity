import { TextInput, useColorScheme } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { forwardRef } from "react";

// CONSTANTS
import { Colors } from "../constants/Colors";

const ThemedTextInput = forwardRef(({ marginBottom = 0, padding=20, style, ...props }, ref) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput
      ref={ref}
      placeholderTextColor={theme.placeholderTextColor}
      style={[
        {
          fontSize: moderateScale(14),
          backgroundColor: theme.uiBackground,
          color: theme.title,
          padding: moderateScale(padding),
          borderRadius: 20,
          marginBottom: moderateScale(marginBottom),
          width: "80%",
        },
        style,
      ]}
      {...props}
    />
  );
});

export default ThemedTextInput;
