import {useState} from 'react';
import {Pressable, Text, View, ViewStyle, TextStyle} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {styles} from './Button.styled';
import {COLORS} from '../../theme/colors';

type ButtonType = 'filled' | 'filled-icon' | 'outlined' | 'outlined-icon';

interface ButtonProps {
  type: ButtonType;
  onPress?: () => void;
  title?: string;
  style?: ViewStyle | TextStyle;
}

export const Button = ({type, onPress, title, style}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  const toggleLike = () => {
    setIsLiked(prev => !prev);
    if (onPress) onPress();
  };

  const renderContent = () => {
    switch (type) {
      case 'filled':
        return (
          <Text style={[styles.text, {color: COLORS.white}]}>{title}</Text>
        );
      case 'filled-icon':
        return (
          <View style={styles.content}>
            <Ionicons
              name={isLiked ? 'star' : 'star-outline'}
              size={16}
              color={isLiked ? COLORS.accent : COLORS.white}
              style={styles.icon}
            />
            <Text style={[styles.text, {color: COLORS.white}]}>
              {isLiked ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'}
            </Text>
          </View>
        );
      case 'outlined':
        return (
          <Text style={[styles.text, {color: COLORS.primaryGreen}]}>
            {title}
          </Text>
        );
      case 'outlined-icon':
        return (
          <View style={styles.content}>
            <Ionicons
              name={isLiked ? 'star' : 'star-outline'}
              size={16}
              color={isLiked ? COLORS.accent : COLORS.primaryGreen}
              style={styles.icon}
            />
            <Text style={[styles.text, {color: COLORS.primaryGreen}]}>
              LIKE
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  const buttonStyles = {
    base: {
      ...styles.button,
      ...style,
    },
    filled: {
      backgroundColor: COLORS.primaryGreen,
    },
    filledActive: {
      backgroundColor: COLORS.darkGreen,
    },
    outlined: {
      ...styles.outlinedButton,
      backgroundColor: COLORS.white,
    },
    outlinedActive: {
      backgroundColor: COLORS.greyshGreen,
    },
    withIcon: {
      paddingHorizontal: 12,
    },
  };

  const getButtonStyle = () => {
    const isFilled = type.includes('filled');
    const isActive = type.includes('icon') ? isLiked : isPressed;

    return [
      buttonStyles.base,
      isFilled ? buttonStyles.filled : buttonStyles.outlined,
      isActive
        ? isFilled
          ? buttonStyles.filledActive
          : buttonStyles.outlinedActive
        : null,
      type.includes('icon') ? buttonStyles.withIcon : null,
    ].filter(Boolean);
  };

  return (
    <Pressable
      style={[getButtonStyle(), style]}
      onPress={toggleLike}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      {renderContent()}
    </Pressable>
  );
};
