import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import {COLORS} from '../../theme/colors';

import Ionicons from '@expo/vector-icons/Ionicons';

type TabBarIconName = keyof typeof Ionicons.glyphMap;

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName: TabBarIconName = 'person';

          route.name === 'ALL CHARACTERS'
            ? (iconName = 'person')
            : (iconName = 'star');

          return <Ionicons name={iconName} size={22} color={COLORS.white} />;
        },
        tabBarActiveBackgroundColor: COLORS.primaryGreen,
        tabBarInactiveBackgroundColor: COLORS.darkGreen,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 70,
          paddingBottom: Platform.OS === 'ios' ? 0 : 0,
        },
        tabBarLabelStyle: {
          color: COLORS.white,
          fontSize: 14,
          fontFamily: 'DM Mono',
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      })}>
      <Tab.Screen
        name="ALL CHARACTERS"
        component={CharacterListScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="LIKED CHARACTERS"
        component={FavoriteCharactersScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
