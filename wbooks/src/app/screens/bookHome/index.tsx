import React from 'react';
import { SafeAreaView } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import BookDetail from '@app/components/itemDetail';

import styles from './styles';

function BookHome() {
  const { author, title, genre, year, imageUrl } = BOOKS_MOCK[3];
  return (
    <SafeAreaView style={styles.container}>
      <BookDetail author={author} title={title} genre={genre} year={year} imageUrl={imageUrl} />
    </SafeAreaView>
  );
}

export default BookHome;
