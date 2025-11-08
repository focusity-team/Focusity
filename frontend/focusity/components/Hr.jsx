import { View, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const Hr = ({thickness = 1, width = '100%', marginVertical = 10 }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View
      style={[
        styles.hr,
        {
          backgroundColor: theme.iconColor,
          height: thickness,
          width,
          marginVertical,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  hr: {
    alignSelf: 'center',
  },
});

export default Hr;
