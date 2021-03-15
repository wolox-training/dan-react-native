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
import fondo from '@assets/bc_nav_bar.png';

import styles from './styles';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="HomeList"
        screenOptions={{
          headerTintColor: white,
          // headerTitleAlign: 'center', se comenta para tener comportamiento natvio iOS/Android
          headerTitleStyle: {
            textTransform: 'uppercase'
          },
          headerBackground: () => (
            <Image
              style={[styles.headerImage, StyleSheet.absoluteFill]}
              source={fondo}
              resizeMode="stretch"
            />
          )
        }}>
        <AppStack.Screen name="Home" component={BookHome} options={{ title: 'Inicio' }} />
        <AppStack.Screen name="HomeList" component={BookList} options={{ title: 'Lista de Libros' }} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
