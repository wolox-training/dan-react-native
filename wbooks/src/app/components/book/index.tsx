import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  author: string;
  image: string;
}

function Book({ title, author, image }: Props) {
  const handlePress = () => {
    // next implementation
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.containerBook}>
      <Image style={styles.image} resizeMode="center" source={{ uri: image }} />
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Book;
