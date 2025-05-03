import React from 'react';
import {View, Image, Platform} from 'react-native';
import {styles} from './Navbar.styled';

export const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <Image
        source={require('../../../assets/Rick_and_Morty_Logo.png')}
        style={[styles.logo, Platform.OS === 'ios' && {marginTop: 30}]}
      />
    </View>
  );
};
