import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { responsiveWidth as wp} from 'react-native-responsive-dimensions';


const ThemedView = ({width, style, row=false, container=false, center=false, centerV=false, centerH=false, safe=false, ...props}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  if (!safe) {
    return (
      <View
        style={[{
          backgroundColor: theme.background,
          width: width ? wp(width) : 'auto'
        },
        style,
        container && styles.container,
        row && styles.row,
        center && styles.center,
        centerV && styles.centerV,
        centerH && styles.centerH]}
        {...props}
      />
    )
  }

const insets = useSafeAreaInsets()

  return (
    <View
      style={[{
        backgroundColor: theme.background,
        marginTop: insets.top,
        marginBottom: insets.bottom,
        width: width ? wp(width) : 'auto'
      },
      style,
      row && styles.row,
      container && styles.container,
      center && styles.center,
      centerV && styles.centerV,
      centerH && styles.centerH]}
      {...props}
    />
  )
}


export default ThemedView

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  center: {
   justifyContent: "center",
   alignItems: "center", 
  },
  centerV: {
    alignItems: "center",
  },
  centerH: {
    justifyContent: "center",
  },
})