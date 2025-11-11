import React from "react";
import { TextInput, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { moderateScale } from "react-native-size-matters";

const NumInput = ({center=false, style, onChangeText, value, decimal = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const handleChange = (text) => {
    let cleaned = text.replace(/[^0-9]/g, "");

    if (decimal) {
      cleaned = text.replace(/[^0-9.]/g, "");
      const parts = cleaned.split(".");
      if (parts.length > 2) cleaned = parts[0] + "." + parts.slice(1).join("");
    }

    const numericValue =
      cleaned === "" || cleaned === "." ? null : Number(cleaned);

    onChangeText?.(numericValue);
  };

  return (
    <TextInput
      keyboardType={decimal ? "decimal-pad" : "number-pad"}
      placeholderTextColor={theme.placeholderTextColor}
      style={[
        {
          fontSize: moderateScale(14),
          backgroundColor: theme.uiBackground,
          color: theme.title,
          padding: moderateScale(20),
          borderRadius: 20,
        },
        center && {textAlign: "center"},
        style,
      ]}
      value={value?.toString() ?? ""}
      onChangeText={handleChange}
      {...props}
    />
  );
};

export default NumInput;
