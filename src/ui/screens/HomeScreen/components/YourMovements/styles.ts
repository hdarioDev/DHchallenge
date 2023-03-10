import {StyleSheet} from 'react-native';
import {colors} from '../../../../shared/theme/colors';

export const styles = StyleSheet.create({
  movementsContainer: {
    with: 353,
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 43,
    flex: 1,
    height: 60,
    width: '100%',
  },
});
