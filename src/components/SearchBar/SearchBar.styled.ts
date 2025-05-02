import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.darkGreen,
    borderRadius: 100,
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 40,
  },
  icon: {
    marginRight: 8,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.darkGreen,
  },
});
