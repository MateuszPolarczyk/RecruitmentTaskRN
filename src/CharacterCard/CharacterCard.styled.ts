import {StyleSheet} from 'react-native';
import {COLORS} from '../theme/colors';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginHorizontal: 4,
    marginBottom: 16,
  },
  cardBorder: {
    backgroundColor: COLORS.darkGreen,
    borderRadius: 24,
    paddingBottom: 4,
    paddingRight: 4,
  },
  cardContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
    marginLeft: 0,
  },
  detailsContainer: {
    flex: 1,
    paddingRight: 12,
  },
  labelText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.mediumGreen,
    marginTop: 4,
  },
  nameText: {
    fontSize: 16,
    marginBottom: 8,
    color: COLORS.darkGreen,
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.darkGreen,
    overflow: 'hidden',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: COLORS.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.greyshGreen,
  },
  placeholderText: {
    color: COLORS.mediumGreen,
  },
});