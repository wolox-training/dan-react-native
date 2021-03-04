import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView, View } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import Book from '@components/book';
import { Book as IBook } from '@interfaces/bookInterface';

import styles from './styles';

function BookList() {
  const keyExtractor = ({ id }: IBook) => `${id}`;

  const renderItem: ListRenderItem<IBook> = ({ item }) => {
    const { title, author, imageUrl } = item;
    return <Book imageUrl={imageUrl} title={title} author={author} />;
  };

  const itemSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={BOOKS_MOCK}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeparator}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
}

export default BookList;
