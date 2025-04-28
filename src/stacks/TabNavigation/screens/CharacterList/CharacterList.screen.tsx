import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {Button} from '../../../../components/Button/Button';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => console.log('search_pressed')}
        type="filled"
        title="SEARCH"
      />
      <Button
        onPress={() => console.log('search_pressed')}
        type="filled"
        title="APPLY"
      />
      <Button
        onPress={() => console.log('add_to_liked_pressed')}
        type="filled-icon"
        style={{width: '80%'}}
      />
      <Button
        onPress={() => console.log('search_outline_pressed')}
        type="outlined"
        title="RESET"
      />
      <Button
        onPress={() => console.log('like_pressed')}
        type="outlined-icon"
      />
    </View>
  );
};

export default CharacterListScreen;
