import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const imageDefault = 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png';

interface Props {
  text: string;
  author: string;
  url: string | null;
}

function BookComment({ text, author, url }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url ? url : imageDefault }} />
      <View style={styles.containerInfo}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

export default BookComment;
