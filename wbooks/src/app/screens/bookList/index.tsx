import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FlatList, ListRenderItem, SafeAreaView, View } from 'react-native';
import actionCreators, { bookAdd as ActionBookAdd } from '@redux/book/actions';
import Book from '@components/book';
import { Book as IBook } from '@interfaces/bookInterface';
import { AppState } from '@interfaces/appStateInterface';

import styles from './styles';

const mapStateToProps = (state: AppState) => ({
  library: state.library
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  bookList: () => actionCreators.getBooks(),
  // bookList: (books: IBook[]) => dispatch(ActionBookList(books)),
  bookAdd: (book: IBook) => dispatch(ActionBookAdd(book))
});

interface Props {
  library: any;
  bookList: any;
}

function BookList({ library, bookList }: Props) {
  bookList();
  actionCreators.getBooks();

  const keyExtractor = ({ id }: IBook) => `${id}`;

  const renderItem: ListRenderItem<IBook> = ({ item }) => {
    const { title, author, imageUrl } = item;
    return <Book imageUrl={imageUrl} title={title} author={author} />;
  };

  const itemSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={library}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeparator}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
