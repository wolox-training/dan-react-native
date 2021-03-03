/* eslint-disable no-use-before-define */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import Book from '@app/components/book';

import styles from './styles';

const App = () => {
  const author = 'Emmie Thiel';
  const title = 'Ring of Bright Water: The revenge of the dark fire ring';
  const imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/51Zsio+pONL._SX359_BO1,204,203,200_.jpg';

  return (
    <SafeAreaView style={styles.container}>
      <Book title={title} author={author} image={imageUrl} />
    </SafeAreaView>
  );
};

export default App;
