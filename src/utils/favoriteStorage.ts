import AsyncStorage from '@react-native-async-storage/async-storage';
import {Character} from '../api/charactersApi';

const FAVORITES_KEY = 'FAVORITE_CHARACTERS';

export const getFavorites = async (): Promise<Character[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to load favorites', e);
    return [];
  }
};

export const addFavorite = async (character: Character): Promise<boolean> => {
  try {
    const favorites = await getFavorites();
    const existingIndex = favorites.findIndex(fav => fav.id === character.id);
    
    if (existingIndex === -1) {
      const newFavorites = [...favorites, character];
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      return true;
    }
    return false;
  } catch (e) {
    console.error('Failed to add favorite', e);
    return false;
  }
};

export const removeFavorite = async (characterId: number): Promise<boolean> => {
  try {
    const favorites = await getFavorites();
    const newFavorites = favorites.filter(fav => fav.id !== characterId);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    return true;
  } catch (e) {
    console.error('Failed to remove favorite', e);
    return false;
  }
};

export const isFavorite = async (characterId: number): Promise<boolean> => {
  try {
    const favorites = await getFavorites();
    return favorites.some(fav => fav.id === characterId);
  } catch (e) {
    console.error('Failed to check favorite', e);
    return false;
  }
};