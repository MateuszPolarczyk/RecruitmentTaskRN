import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import {FilterButton} from '../../../../components/Filter/FilterButton/FilterButton';

const mockCharacters = [
  {id: 1, name: 'Rick Sanchez', species: 'Human', status: 'Alive'},
  {id: 2, name: 'Morty Smith', species: 'Human', status: 'Alive'},
  {id: 3, name: 'Summer Smith', species: 'Human', status: 'Alive'},
  {id: 4, name: 'Beth Smith', species: 'Human', status: 'Alive'},
  {id: 5, name: 'Jerry Smith', species: 'Human', status: 'Alive'},
  {id: 6, name: 'Birdperson', species: 'Bird-Person', status: 'Deceased'},
  {id: 7, name: 'Mr. Meeseeks', species: 'Meeseeks', status: 'Unknown'},
  {id: 8, name: 'Squanchy', species: 'Unknown', status: 'Unknown'},
  {id: 9, name: 'Abradolf Lincler', species: 'Human', status: 'Unknown'},
  {id: 10, name: 'Unity', species: 'Hivemind', status: 'Alive'},
  {id: 11, name: 'Evil Morty', species: 'Human', status: 'Alive'},
  {id: 12, name: 'Noob-Noob', species: 'Unknown', status: 'Alive'},
];

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Characters</Text>
        <SearchBar onChangeText={t => console.log(t)} />
        <FilterButton />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}>
        {mockCharacters.map(character => (
          <TouchableOpacity key={character.id} style={styles.characterCard}>
            <Text style={styles.characterName}>{character.name}</Text>
            <View style={styles.characterDetails}>
              <Text style={styles.characterText}>
                Species: {character.species}
              </Text>
              <Text style={styles.characterText}>
                Status: {character.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CharacterListScreen;
