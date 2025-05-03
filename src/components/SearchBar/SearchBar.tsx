import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, ViewStyle} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {COLORS} from '../../theme/colors';
import {styles} from './SearchBar.styled';

interface SearchBarProps {
  value: string;
  onChangeText: (value: string) => void;
  onCancel?: () => void;
  style?: ViewStyle;
}

const SearchBar = ({value, onChangeText, onCancel, style}: SearchBarProps) => {
  const [focused, setFocused] = useState(false);

  const handleClear = () => {
    onChangeText('');
    onCancel?.();
  };

  return (
    <View style={[styles.container, style]}>
      <Ionicons
        name="search"
        size={20}
        color={COLORS.darkGreen}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={
          !focused && value.length === 0 ? 'Search the characters' : ''
        }
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="never"
        placeholderTextColor={COLORS.mediumGreen}
        cursorColor={COLORS.darkGreen}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={handleClear}>
          <Ionicons
            name="close"
            size={20}
            color={COLORS.darkGreen}
            style={[
              styles.icon,
              {backgroundColor: COLORS.greyshGreen, borderRadius: 4},
            ]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
