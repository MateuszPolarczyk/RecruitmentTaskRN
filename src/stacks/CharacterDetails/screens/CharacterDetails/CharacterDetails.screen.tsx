import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import {COLORS} from '../../../../theme/colors';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {fetchCharacter, Character} from '../../../../api/charactersApi';
import {styles} from './CharacterDetails.styled';
import {Button} from '../../../../components/Button/Button';
import {
  isFavorite,
  addFavorite,
  removeFavorite,
} from '../../../../utils/favoriteStorage';

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

  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const characterData = await fetchCharacter(characterId);
        setCharacter(characterData);

        const liked = await isFavorite(characterId);
        setIsLiked(liked);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to load character';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadCharacter();
  }, [characterId]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleToggleFavorite = async () => {
    if (!character) return;

    if (isLiked) {
      const removed = await removeFavorite(character.id);
      if (removed) setIsLiked(false);
    } else {
      const added = await addFavorite(character);
      if (added) setIsLiked(true);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.darkGreen} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!character) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Character not found</Text>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons
          name="arrow-back"
          size={12}
          color={COLORS.mediumGreen}
          style={{textDecorationLine: 'underline'}}
        />
        <Text style={styles.backButtonText}>Go back to Character List</Text>
      </TouchableOpacity>

      <View style={styles.cardWrapper}>
        <View style={styles.cardBorder}>
          <View style={styles.cardContainer}>
            <Image
              source={{uri: character.image}}
              style={styles.characterImage}
            />

            <View style={styles.nameContainer}>
              <Text style={styles.labelName}>NAME</Text>
              <Text style={styles.name}>{character.name}</Text>
            </View>

            <View style={styles.attributesGrid}>
              <View style={styles.gridRow}>
                <View style={styles.attributeCard}>
                  <Text style={styles.attributeLabel}>STATUS</Text>
                  <Text style={styles.attributeValue}>{character.status}</Text>
                </View>
                <View style={styles.attributeCard}>
                  <Text style={styles.attributeLabel}>ORIGIN</Text>
                  <Text style={styles.attributeValue}>
                    {character.origin.name}
                  </Text>
                </View>
              </View>

              <View style={styles.gridRow}>
                <View style={styles.attributeCard}>
                  <Text style={styles.attributeLabel}>SPECIES</Text>
                  <Text style={styles.attributeValue}>{character.species}</Text>
                </View>
                <View style={styles.attributeCard}>
                  <Text style={styles.attributeLabel}>GENDER</Text>
                  <Text style={styles.attributeValue}>{character.gender}</Text>
                </View>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                type="filled-icon"
                isLiked={isLiked}
                onPress={handleToggleFavorite}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterDetailsScreen;
