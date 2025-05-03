import {Platform, StyleSheet, StatusBar} from 'react-native';
import {COLORS} from '../../theme/colors';

export const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    height: Platform.OS === 'ios' ? 120 : 80,
    backgroundColor: COLORS.darkGreen,
    justifyContent: 'center',
    padding: 16,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  logo: {
    width: 105,
    height: 32,
  },
});
