import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FlatList, ListRenderItem, SafeAreaView, View } from 'react-native';
import actionCreators from '@redux/book/actions';
import { Book as IBook } from '@interfaces/bookInterface';
import { AppState } from '@interfaces/appStateInterface';
import Book from '@components/book';

import styles from './styles';

const mapStateToProps = (state: AppState) => ({
  books: state.library.books
});

// dispatch: Dispatch<any>
const mapDispatchToProps = (dispatch: any) => ({
  getBookList: () => dispatch(actionCreators.getBooks())
});

interface Props {
  books: IBook[];
  getBookList: any;
}

function BookList({ books, getBookList }: Props) {
  useEffect(() => {
    getBookList();
  }, [getBookList]);

  const keyExtractor = ({ id }: IBook) => `${id}`;

  const renderItem: ListRenderItem<IBook> = ({ item }) => {
    const { title, author, imageUrl } = item;
    return <Book imageUrl={imageUrl} title={title} author={author} />;
  };

  const itemSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeparator}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
