import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView, View } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import Book from '@components/book';
import { Book as IBook } from '@interfaces/bookInterface';
import { connect } from 'react-redux';
import { ReduxInterface } from '@interfaces/reduxInterface';

import styles from './styles';

const mapStateToProps = (state: ReduxInterface) => ({
  book: state.book
});

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

export default connect(mapStateToProps)(BookList);
// export default BookList;
