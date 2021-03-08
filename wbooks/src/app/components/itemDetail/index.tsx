import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '@components/button';

import { BUTTONTHEME } from '../button/utils';

import styles from './styles';

const imageDefault = 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png';

export interface Props {
  title: string;
  author: string;
  imageUrl: string | null;
  year: string;
  genre: string;
}

function ItemDetail({ title, author, imageUrl, year, genre }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBook}>
        <Image style={styles.image} source={{ uri: imageUrl ? imageUrl : imageDefault }} />
        <View style={styles.containerInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.year}>{year}</Text>
          <Text style={styles.genre}>{genre}</Text>
        </View>
      </View>
      <Button text={'add to wishlist'} stylesButton={BUTTONTHEME.OUTLINE} />
      <Button text={'rent'} stylesButton={BUTTONTHEME.GRADIENTS} />
    </View>
  );
}

export default ItemDetail;
