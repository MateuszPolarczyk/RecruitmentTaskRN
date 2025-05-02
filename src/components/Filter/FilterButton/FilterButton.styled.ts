import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme/colors';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 34,
    width: 113,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    minWidth: 83,
    borderRadius: 22,
    backgroundColor: COLORS.primaryGreen,
    gap: 10,
  },
});
