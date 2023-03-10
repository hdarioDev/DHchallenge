import {StyleSheet} from 'react-native';
import {colors} from '../../../../shared/theme/colors';

export const styles = StyleSheet.create({
  movementsContainer: {
    with: 353,
    height: 350,
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 43,
  },
});
