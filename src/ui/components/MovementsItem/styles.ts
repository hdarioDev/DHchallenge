import {StyleSheet} from 'react-native';
import {colors} from '../../shared/theme/colors';
import {globalStyles} from '../../shared/theme/globalStyles';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  imageItem: {
    width: 55,
    height: 55,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  item: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    flex: 1,
    marginLeft: 11,
  },
  itemTitle: {
    ...globalStyles.textMediumBold,
  },
  itemDate: {
    ...globalStyles.textSmall,
    paddingTop: 3,
  },
  itemPoint: {
    width: 50,
    height: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12.17,
  },
  minus: {
    color: 'red',
    ...globalStyles.numberBold,
  },
  plus: {
    color: 'green',
    ...globalStyles.numberBold,
  },
  itemPointValue: {
    ...globalStyles.numberBold,
  },
  itemIcon: {
    width: 12,
    height: 16,
    ...globalStyles.numberBold,
    marginRight: 10,
  },
});
