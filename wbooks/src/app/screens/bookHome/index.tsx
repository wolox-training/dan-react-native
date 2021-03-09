import React from 'react';
import { SafeAreaView } from 'react-native';
import { COMMENTS_MOCK } from '@constants/mockComments';
import BookComment from '@app/components/bookComment';

import styles from './styles';

function BookHome() {
  const { author, text, url } = COMMENTS_MOCK[0];
  return (
    <SafeAreaView style={styles.container}>
      <BookComment author={author} text={text} url={url} />
    </SafeAreaView>
  );
}

export default BookHome;
