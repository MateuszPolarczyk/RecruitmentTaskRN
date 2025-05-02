import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterDetailsStackRoutes} from './CharacterDetails.routes';
import {CharacterDetailsScreen} from './screens';
import {CharacterDetailsStackParamList} from './CharacterDetails.routes';

const Stack = createNativeStackNavigator<CharacterDetailsStackParamList>();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        component={CharacterDetailsScreen}
        options={{title: 'Character Details'}}
      />
    </Stack.Navigator>
  );
};
