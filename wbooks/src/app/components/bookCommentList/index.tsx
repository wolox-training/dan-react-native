import React, { useState } from 'react';
import { FlatList, ListRenderItem, View, Text, TouchableOpacity } from 'react-native';
import { CommentBook, CommentBook as ICommentBook } from '@interfaces/commentBookInterface';

import BookComment from '../bookComment';

import styles from './styles';

const MINELEMENT = 2;
const MAXELEMENT = 5;

interface Props {
  commentList: CommentBook[];
}

function BookCommentList({ commentList }: Props) {
  const [quantityElement, setQuantityElement] = useState(MINELEMENT);
  const filterComments = () => commentList.slice(0, quantityElement);
  const [commentListFilter, setCommentListFilter] = useState(filterComments);

  const keyExtractor = ({ id }: ICommentBook) => `${id}`;

  const renderItem: ListRenderItem<ICommentBook> = ({ item }) => {
    const { text, author, url } = item;
    return <BookComment text={text} url={url} author={author} />;
  };

  const itemSeparator = () => <View style={styles.separator} />;

  const handleShowComment = () => {
    setQuantityElement(quantityElement === MINELEMENT ? MAXELEMENT : MINELEMENT);
    setCommentListFilter(filterComments);
  };

  const listFooter = () => (
    <TouchableOpacity style={styles.containerFooter} onPress={handleShowComment}>
      <Text style={styles.textFooter}>View All</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={commentListFilter}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={itemSeparator}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={listFooter}
    />
  );
}

export default BookCommentList;
