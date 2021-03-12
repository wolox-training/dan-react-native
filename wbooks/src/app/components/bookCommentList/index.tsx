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
  const filterMinComments = commentList.slice(0, MINELEMENT);
  const filterMaxComments = commentList.slice(0, MAXELEMENT);

  const [data, setData] = useState(filterMinComments);
  const [open, setOpen] = useState(false);

  const keyExtractor = ({ id }: ICommentBook) => `${id}`;

  const renderItem: ListRenderItem<ICommentBook> = ({ item }) => {
    const { text, author, url } = item;
    return <BookComment text={text} url={url} author={author} />;
  };

  const itemSeparator = () => <View style={styles.separator} />;

  const handleShowComment = () => {
    setData(open ? filterMinComments : filterMaxComments);
    setOpen(!open);
  };

  const listFooter = () => (
    <TouchableOpacity style={styles.containerFooter} onPress={handleShowComment}>
      <Text style={styles.textFooter}>{open ? 'View Less' : 'View All'}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={itemSeparator}
      contentContainerStyle={styles.contentContainer}
      ListFooterComponent={listFooter}
    />
  );
}

export default BookCommentList;
