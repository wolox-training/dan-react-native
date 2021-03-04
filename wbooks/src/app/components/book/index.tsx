import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const imageDefault = 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png';

export interface Props {
  title: string;
  author: string;
  imageUrl: string | null;
}

function Book({ title, author, imageUrl }: Props) {
  const handlePress = () => {
    // next implementation
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.containerBook}>
      <Image style={styles.image} resizeMode="center" source={{ uri: imageUrl ? imageUrl : imageDefault }} />
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Book;
