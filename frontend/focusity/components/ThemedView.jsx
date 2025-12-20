import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { responsiveWidth as wp, responsiveHeight as hp} from 'react-native-responsive-dimensions';
import { moderateScale } from 'react-native-size-matters';


const ThemedView = ({marginBottom=0, marginLeft=0, height, width, style, row=false, container=false, center=false, centerV=false, centerH=false, safe=false, ...props}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const insets = useSafeAreaInsets()

  if (!safe) {
    return (
      <View
        style={[{
          backgroundColor: theme.background,
          width: width ? wp(width) : 'auto',
          marginBottom: moderateScale(marginBottom),
          marginLeft: moderateScale(marginLeft),
          height: height ? hp(height) : "auto",
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