import {useState} from 'react';
import {Pressable, Text, View, ViewStyle, TextStyle} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {styles} from './FilterButton.styled';
import {COLORS} from '../../../theme/colors';

interface FilterButtonProps {
  onPress?: () => void;
  style?: ViewStyle | TextStyle;
}

export const FilterButton = ({onPress, style}: FilterButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.button,
        {
          backgroundColor: isPressed ? COLORS.darkGreen : COLORS.primaryGreen,
        },
        style,
      ]}>
      <Text style={{fontFamily: 'DM Mono', color: COLORS.white, fontSize: 14}}>
        FILTER
      </Text>
      <Ionicons
        name={isPressed ? 'chevron-up' : 'chevron-down'}
        size={14}
        color={COLORS.white}
      />
    </Pressable>
  );
};
