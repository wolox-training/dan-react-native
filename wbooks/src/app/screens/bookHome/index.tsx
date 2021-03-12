import React from 'react';
import { SafeAreaView } from 'react-native';
import BookCommentList from '@components/bookCommentList';
import { COMMENTS_MOCK } from '@constants/mockComments';

import styles from './styles';

function BookHome() {
  return (
    <SafeAreaView style={styles.container}>
      <BookCommentList commentList={COMMENTS_MOCK} />
    </SafeAreaView>
  );
}

export default BookHome;
