import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../shared/theme/colors';

export const styles = StyleSheet.create({
  image: {
    width: 353,
    height: 350,
    borderRadius: 10,
    marginTop: 19,
    marginBottom: 12,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.6,
      },
    }),
  },
});
