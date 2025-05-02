import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Modal.styled';
import {COLORS} from '../../../theme/colors';
import {Button} from '../../Button/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import {FilterCategory} from '../../../stacks/TabNavigation/screens/CharacterList/CharacterList.screen';

interface FilterOption {
  label: string;
  value: string;
  selected: boolean;
}

interface FilterSection {
  title: FilterCategory;
  options: FilterOption[];
}

interface ModalProps {
  visible: boolean;
  onApply: () => void;
  onReset: () => void;
  onToggleOption: (category: FilterCategory, value: string) => void;
  filterSections: FilterSection[];
}

export const FilterModal = ({
  visible,
  onApply,
  onReset,
  onToggleOption,
  filterSections,
}: ModalProps) => {
  if (!visible) return null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.modalBorder}>
        <View style={styles.modalContainer}>
          {filterSections.map(section => (
            <View key={section.title} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {section.title.toUpperCase()}
              </Text>
              {section.options.map(option => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.optionContainer}
                  onPress={() => onToggleOption(section.title, option.value)}>
                  <View
                    style={[
                      styles.checkbox,
                      option.selected && styles.checkboxSelected,
                    ]}>
                    {option.selected && (
                      <Ionicons
                        name="checkmark"
                        size={14}
                        color={COLORS.white}
                      />
                    )}
                  </View>
                  <Text style={styles.optionLabel}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}

          <View style={styles.buttonContainer}>
            <Button type="outlined" title="RESET" onPress={onReset} />
            <Button type="filled" title="APPLY" onPress={onApply} />
          </View>
        </View>
      </View>
    </View>
  );
};
