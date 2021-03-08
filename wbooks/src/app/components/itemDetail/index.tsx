import React from 'react';
import { Text, View, Image } from 'react-native';
import CustomButton from '@components/customButton';

import { BUTTONTHEME } from '../customButton/utils';

import styles from './styles';

const imageDefault = 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png';

interface Props {
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
          <Text style={styles.subTitle}>{author}</Text>
          <Text style={styles.subTitle}>{year}</Text>
          <Text style={[styles.subTitle, styles.genre]}>{genre}</Text>
        </View>
      </View>
      <CustomButton text={'add to wishlist'} stylesButton={BUTTONTHEME.OUTLINE} />
      <CustomButton text={'rent'} stylesButton={BUTTONTHEME.GRADIENTS} />
    </View>
  );
}

export default ItemDetail;
