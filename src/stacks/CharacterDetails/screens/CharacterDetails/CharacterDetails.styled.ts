import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 12,
    color: COLORS.mediumGreen,
    textDecorationLine: 'underline',
  },
  characterId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
