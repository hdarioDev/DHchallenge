import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../../shared/theme/colors';
import {globalStyles} from '../../../../shared/theme/globalStyles';

export const styles = StyleSheet.create({
  cardContainerShadow: {
    position: 'absolute',
    backgroundColor: '#b1b1b1',
    height: 143,
    width: 286,
    marginTop: 62,
    borderRadius: 20,
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 4,
  },
  cardContainer: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 143,
    width: 286,
    marginTop: 20,
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.3,
      },
    }),
  },
  cardTitle: {
    ...globalStyles.textExtraLargeBold,
    color: colors.white,
    marginTop: 21,
    marginLeft: 19,
    lineHeight: 16,
    fontSize: 16,
  },
  cardContentPoints: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardPoints: {
    ...globalStyles.textExtraLargeBold,
    marginTop: 7,
    color: colors.white,
    lineHeight: 44,
  },
});
