import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';

export const styles = StyleSheet.create({
  button: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    minWidth: 83,
    borderRadius: 100,
    flexDirection: 'row',
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
  },
  text: {
    fontSize: 14,
  },
  icon: {
    marginRight: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
