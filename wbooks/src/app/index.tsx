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

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: white,
          headerTitleAlign: 'center',
          // headerTitleStyle: {
          //   textTransform: 'uppercase'
          // },
          headerBackground: () => (
            <Image
              style={StyleSheet.absoluteFill}
              source={fondo}
              // width={450}
              // height={60}
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
