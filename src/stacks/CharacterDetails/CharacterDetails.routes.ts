import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type CharacterDetailsStackParamList = {
  CharacterDetailsScreen: {characterId: number};
};

export type CharacterDetailsStackNavigationProp =
  NativeStackNavigationProp<CharacterDetailsStackParamList>;

export const CharacterDetailsStackRoutes = {
  CharacterDetailsScreen: 'CharacterDetailsScreen',
} as const;
