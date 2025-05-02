import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import {COLORS} from '../../../../theme/colors';

type CharacterDetailsScreenRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

interface CharacterDetailsScreenProps {
  route: CharacterDetailsScreenRouteProp;
}

const CharacterDetailsScreen = ({route}: CharacterDetailsScreenProps) => {
  const {characterId} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<CharacterDetailsStackParamList>>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons
          name="arrow-back"
          size={12}
          color={COLORS.mediumGreen}
          style={{textDecorationLine: 'underline'}}
        />
        <Text style={styles.backButtonText}>Go back to Character List</Text>
      </TouchableOpacity>
      <Text style={styles.characterId}>Character ID: {characterId}</Text>
    </View>
  );
};

export default CharacterDetailsScreen;
