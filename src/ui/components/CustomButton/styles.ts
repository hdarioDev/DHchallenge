import {StyleSheet} from 'react-native';
import {colors} from '../../shared/theme/colors';
import {globalStyles} from '../../shared/theme/globalStyles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    ...globalStyles.numberBold,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
