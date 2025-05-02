import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  retryButton: {
    color: COLORS.darkGreen,
    marginTop: 8,
  },
  headerContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '500',
    color: COLORS.darkGreen,
    letterSpacing: -1,
  },
  searchRow: {
    gap: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    gap: 12,
    paddingBottom: 24,
  },
  characterCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 16,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  characterDetails: {
    marginTop: 8,
  },
  characterText: {
    fontSize: 14,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  noResultsText: {
    fontSize: 16,
    marginBottom: 16,
  },
  resetButton: {
    color: COLORS.darkGreen,
  },
});
