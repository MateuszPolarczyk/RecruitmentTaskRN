import React from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import {styles} from './CharacterCard.styled';
import {Button} from '../components/Button/Button';

interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  imageUrl?: string;
  isLiked: boolean;
  onPress?: () => void;
  onLikePress?: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  status,
  species,
  imageUrl,
  isLiked,
  onPress,
  onLikePress,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardBorder}>
        <Pressable style={styles.cardContainer} onPress={onPress}>
          <View style={styles.detailsContainer}>
            <Text style={styles.labelText}>NAME</Text>
            <Text style={styles.nameText}>{name}</Text>

            <Text style={styles.labelText}>STATUS</Text>
            <Text style={styles.nameText}>{status}</Text>

            <Text style={styles.labelText}>SPECIES</Text>
            <Text style={styles.nameText}>{species}</Text>
          </View>

          <View style={styles.imageContainer}>
            {imageUrl ? (
              <View style={styles.imageWrapper}>
                <ImageBackground
                  source={{uri: imageUrl}}
                  style={styles.image}
                />
                <View style={styles.buttonContainer}>
                  <Button
                    type={'outlined-icon'}
                    onPress={onLikePress}
                    isLiked={isLiked}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.placeholderText}>No Image</Text>
              </View>
            )}
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default CharacterCard;
