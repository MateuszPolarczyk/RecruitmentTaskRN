import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme/colors';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  modalBorder: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 12,
    paddingBottom: 4,
    paddingRight: 4,
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.darkGreen,
    padding: 16,
    marginTop: -4,
    marginLeft: -4,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.mediumGreen,
    marginBottom: 8,
    fontFamily: 'DM Mono',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: COLORS.mediumGreen,
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: COLORS.darkGreen,
    borderColor: COLORS.darkGreen,
  },
  optionLabel: {
    fontSize: 14,
    color: COLORS.darkGreen,
    fontFamily: 'DM Mono',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 8,
  },
});
