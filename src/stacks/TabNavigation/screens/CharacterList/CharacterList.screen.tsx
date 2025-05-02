import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {styles} from './CharacterList.styled';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import {COLORS} from '../../../../theme/colors';
import {FilterButton} from '../../../../components/Filter/FilterButton/FilterButton';
import {FilterModal} from '../../../../components/Filter/Modal/Modal';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import {useDebounce} from '../../../../hooks/useDebounce';
import {fetchCharacters, Character} from '../../../../api/charactersApi';
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from '../../../../utils/favoriteStorage';
import {MainStackNavigationProp} from '../../../Main/Main.routes';

type RootStackParamList = {
  CharacterDetails: {characterId: number};
  Favorites: undefined;
};

export type FilterCategory = 'status' | 'species';

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

interface FilterState {
  status: FilterOption[];
  species: FilterOption[];
}

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const isFocused = useIsFocused();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    status: [],
    species: [],
  });
  const [tempFilters, setTempFilters] = useState<FilterState>({
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
  const [favoritesMap, setFavoritesMap] = useState<Record<number, boolean>>({});

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const queryParams = {
    ...(debouncedSearchQuery && {name: debouncedSearchQuery}),
    ...(activeFilters.status.length > 0 && {
      status: activeFilters.status.join(','),
    }),
    ...(activeFilters.species.length > 0 && {
      species: activeFilters.species.join(','),
    }),
  };

  const {
    data: charactersData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['characters', queryParams],
    queryFn: () => fetchCharacters(queryParams),
  });

  useEffect(() => {
    const updateFavoritesStatus = async () => {
      const favorites = await getFavorites();
      const newFavoritesMap: Record<number, boolean> = {};

      favorites.forEach(fav => {
        newFavoritesMap[fav.id] = true;
      });

      if (charactersData?.results) {
        charactersData.results.forEach(char => {
          if (!(char.id in newFavoritesMap)) {
            newFavoritesMap[char.id] = false;
          }
        });
      }

      setFavoritesMap(newFavoritesMap);
    };

    updateFavoritesStatus();
  }, [isFocused, charactersData]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    if (!showFilters) {
      setTempFilters({
        status: tempFilters.status.map(option => ({
          ...option,
          selected: activeFilters.status.includes(option.value),
        })),
        species: tempFilters.species.map(option => ({
          ...option,
          selected: activeFilters.species.includes(option.value),
        })),
      });
    }
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

  const handleLikePress = async (character: Character) => {
    const isCurrentlyFavorite = favoritesMap[character.id] || false;

    if (isCurrentlyFavorite) {
      await removeFavorite(character.id);
    } else {
      await addFavorite(character);
    }

    setFavoritesMap(prev => ({
      ...prev,
      [character.id]: !isCurrentlyFavorite,
    }));
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
      ) : isError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error?.message}</Text>
          <TouchableOpacity onPress={() => refetch()}>
            <Text style={styles.retryButton}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}>
          {charactersData?.results?.length === 0 ? (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>No characters found</Text>
              <TouchableOpacity onPress={resetFilters}>
                <Text style={styles.resetButton}>Reset filters</Text>
              </TouchableOpacity>
            </View>
          ) : (
            charactersData?.results?.map((character: Character) => (
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
                isLiked={favoritesMap[character.id] || false}
                onLikePress={() => handleLikePress(character)}
              />
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterListScreen;
