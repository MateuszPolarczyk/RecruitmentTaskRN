import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, ViewStyle} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {COLORS} from '../../theme/colors';
import {styles} from './SearchBar.styled';

interface SearchBarProps {
  onChangeText?: (value: string) => void;
  onCancel?: () => void;
  style?: ViewStyle;
}

const SearchBar = ({onChangeText, onCancel, style}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const handleChange = (text: string) => {
    setSearchQuery(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    if (onChangeText) {
      onChangeText('');
    }
    if (onCancel) {
      onCancel();
    }
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
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
          !focused && searchQuery.length === 0 ? 'Search the characters' : ''
        }
        value={searchQuery}
        onChangeText={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        placeholderTextColor={COLORS.mediumGreen}
        cursorColor={COLORS.darkGreen}
      />
      {searchQuery.length > 0 && (
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
