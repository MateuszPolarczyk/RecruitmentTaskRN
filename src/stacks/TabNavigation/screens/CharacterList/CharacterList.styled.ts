import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContainer: {
    marginBottom: 16,
    gap: 16,
  },
  title: {
    fontSize: 36,
    color: COLORS.darkGreen,
    fontWeight: '500',
    letterSpacing: -1,
    marginBottom: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  characterCard: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  characterName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.darkGreen,
    marginBottom: 8,
  },
  characterDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  characterText: {
    fontSize: 14,
    color: COLORS.darkGreen,
  },
});
