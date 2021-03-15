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
import 'react-native-gesture-handler';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from '@screens/bookList';
import BookHome from '@screens/bookHome';
import { white } from '@constants/colors';
import bcNavBar from '@assets/bcNavBar.png';
import Routes from '@constants/routes';

import styles from './styles';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={Routes.BookList}
        screenOptions={{
          headerTintColor: white,
          headerTitleStyle: {
            textTransform: 'uppercase'
          },
          headerBackground: () => (
            <Image
              style={[styles.headerImage, StyleSheet.absoluteFill]}
              source={bcNavBar}
              resizeMode="stretch"
            />
          )
        }}>
        <AppStack.Screen name={Routes.Home} component={BookHome} options={{ title: 'Inicio' }} />
        <AppStack.Screen name={Routes.BookList} component={BookList} options={{ title: 'Lista de Libros' }} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
