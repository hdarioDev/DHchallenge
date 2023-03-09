import {StyleSheet} from 'react-native';
import {colors} from '../../shared/theme/colors';
import {globalStyles} from '../../shared/theme/globalStyles';

export const styles = StyleSheet.create({
  pointsTitle: {
    ...globalStyles.textMediumBold,
    color: colors.textGray,
    marginTop: 20,
  },
});
