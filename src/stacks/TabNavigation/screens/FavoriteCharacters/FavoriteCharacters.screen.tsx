import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {styles} from './FavoriteCharacters.styled';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import {COLORS} from '../../../../theme/colors';
import {FilterButton} from '../../../../components/Filter/FilterButton/FilterButton';
import {FilterModal} from '../../../../components/Filter/Modal/Modal';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import {useDebounce} from '../../../../hooks/useDebounce';
import {getFavorites, removeFavorite} from '../../../../utils/favoriteStorage';
import {Character} from '../../../../api/charactersApi';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useNavigation} from '@react-navigation/native';

type FilterCategory = 'status' | 'species';

interface FilterOption {
  label: string;
  value: string;
  selected: boolean;
}

interface FilterSection {
  title: FilterCategory;
  options: FilterOption[];
}

interface ActiveFilters {
  status: string[];
  species: string[];
}

const FavoritesCharactersScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const isFocused = useIsFocused();
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [filteredFavorites, setFilteredFavorites] = useState<Character[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    status: [],
    species: [],
  });
  const [tempFilters, setTempFilters] = useState({
    status: [
      {label: 'Alive', value: 'Alive', selected: false},
      {label: 'Dead', value: 'Dead', selected: false},
      {label: 'Unknown', value: 'unknown', selected: false},
    ],
    species: [
      {label: 'Human', value: 'Human', selected: false},
      {label: 'Humanoid', value: 'Humanoid', selected: false},
    ],
  });

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const loadFavorites = async () => {
    setIsLoading(true);
    try {
      const favs = await getFavorites();
      setFavorites(favs);
      setFilteredFavorites(favs);
    } catch (error) {
      console.error('Failed to load favorites:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadFavorites();
    }
  }, [isFocused]);

  useEffect(() => {
    const filterCharacters = () => {
      let result = [...favorites];

      if (debouncedSearchQuery) {
        result = result.filter(character =>
          character.name
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase()),
        );
      }

      if (activeFilters.status.length > 0) {
        result = result.filter(character =>
          activeFilters.status.includes(character.status),
        );
      }

      if (activeFilters.species.length > 0) {
        result = result.filter(character =>
          activeFilters.species.includes(character.species),
        );
      }

      setFilteredFavorites(result);
    };

    filterCharacters();
  }, [favorites, debouncedSearchQuery, activeFilters]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleFilterOption = (category: FilterCategory, value: string) => {
    setTempFilters(prev => ({
      ...prev,
      [category]: prev[category].map(option =>
        option.value === value
          ? {...option, selected: !option.selected}
          : option,
      ),
    }));
  };

  const applyFilters = () => {
    const newActiveFilters = {
      status: tempFilters.status
        .filter(opt => opt.selected)
        .map(opt => opt.value),
      species: tempFilters.species
        .filter(opt => opt.selected)
        .map(opt => opt.value),
    };
    setActiveFilters(newActiveFilters);
    setShowFilters(false);
  };

  const resetFilters = () => {
    setTempFilters({
      status: tempFilters.status.map(option => ({...option, selected: false})),
      species: tempFilters.species.map(option => ({
        ...option,
        selected: false,
      })),
    });
    setActiveFilters({status: [], species: []});
    setSearchQuery('');
  };

  const handleRemoveFavorite = async (characterId: number) => {
    await removeFavorite(characterId);
    await loadFavorites();
  };

  const filterSections: FilterSection[] = [
    {title: 'status', options: tempFilters.status},
    {title: 'species', options: tempFilters.species},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.searchRow}>
          <Text style={styles.title}>Characters</Text>
          <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
          <FilterButton onPress={toggleFilters} />
        </View>
      </View>

      <FilterModal
        visible={showFilters}
        onApply={applyFilters}
        onReset={resetFilters}
        onToggleOption={toggleFilterOption}
        filterSections={filterSections}
      />

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.darkGreen} />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}>
          {filteredFavorites.length === 0 ? (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>
                {favorites.length === 0
                  ? 'No favorite characters yet'
                  : 'No characters match your filters'}
              </Text>
            </View>
          ) : (
            filteredFavorites.map(character => (
              <CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                species={character.species}
                status={character.status}
                imageUrl={character.image}
                onPress={() =>
                  navigate('CharacterDetailsStack', {
                    screen: 'CharacterDetailsScreen',
                    params: {characterId: character.id},
                  })
                }
                onLikePress={() => handleRemoveFavorite(character.id)}
                isLiked={true}
              />
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default FavoritesCharactersScreen;
