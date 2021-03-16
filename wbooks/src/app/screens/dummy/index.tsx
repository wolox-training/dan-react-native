import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import styles from './styles';

function Dummy() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Screen Dummy</Text>
    </SafeAreaView>
  );
}

export default Dummy;
