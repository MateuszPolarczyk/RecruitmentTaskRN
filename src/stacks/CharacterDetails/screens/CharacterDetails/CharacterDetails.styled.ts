import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
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
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 8,
  },
  backButtonText: {
    fontSize: 12,
    color: COLORS.mediumGreen,
    fontWeight: '400',
    textDecorationLine: 'underline',
    fontFamily: 'Inter',
  },
  cardWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  cardBorder: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 24,
    paddingBottom: 4,
    paddingRight: 4,
  },
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
    padding: 16,
    marginTop: -4,
    marginLeft: -4,
  },
  characterImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
  },
  nameContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  labelName: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.mediumGreen,
    fontFamily: 'DM Mono',
    marginBottom: 4,
  },
  name: {
    fontSize: 32,
    fontWeight: '500',
    color: COLORS.darkGreen,
    fontFamily: 'Inter',
    marginBottom: 16,
  },
  attributesGrid: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  attributeCard: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 10,
    padding: 16,
    width: '48%',
    justifyContent: 'center',
  },
  attributeLabel: {
    fontSize: 12,
    color: COLORS.mediumGreen,
    fontWeight: '500',
    textTransform: 'uppercase',
    marginBottom: 4,
    letterSpacing: 1,
    fontFamily: 'DM Mono',
  },
  attributeValue: {
    fontSize: 16,
    color: COLORS.darkGreen,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
