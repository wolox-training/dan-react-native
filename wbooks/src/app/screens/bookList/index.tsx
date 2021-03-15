import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import Book from '@components/book';
import { Book as IBook } from '@interfaces/bookInterface';
import { Navigation } from '@interfaces/navigation';

import styles from './styles';

function BookList({ navigation }: Navigation) {
  const keyExtractor = ({ id }: IBook) => `${id}`;

  const renderItem: ListRenderItem<IBook> = ({ item }) => {
    const { title, author, imageUrl } = item;
    return <Book imageUrl={imageUrl} title={title} author={author} />;
  };

  const itemSeparator = () => <View style={styles.separator} />;

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleNavigateToHome}>
        <Text style={styles.buttonTitle}>Navegar a Home</Text>
      </TouchableOpacity>
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
