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
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { cerulean, dustyGray, white } from '@constants/colors';
import Routes from '@constants/routes';
import bcNavBar from '@assets/bcNavBar.png';
import BookList from '@screens/bookList';
import BookHome from '@screens/bookHome';
import Dummy from '@screens/dummy';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const customHeaderNavigator: StackNavigationOptions = {
  headerTintColor: white,
  headerTitleStyle: {
    textTransform: 'uppercase'
  },
  headerBackground: () => (
    <Image style={[styles.headerImage, StyleSheet.absoluteFill]} source={bcNavBar} resizeMode="stretch" />
  )
};

const BookListStack = createStackNavigator();
const BookListStackScreen = () => {
  return (
    <BookListStack.Navigator initialRouteName={Routes.BookList} screenOptions={customHeaderNavigator}>
      <BookListStack.Screen name={Routes.BookList} component={BookList} options={{ title: 'Library' }} />
      <BookListStack.Screen name={Routes.Home} component={BookHome} options={{ title: 'Home' }} />
    </BookListStack.Navigator>
  );
};

const DummyStack = createStackNavigator();
const DammyStackScreen = () => {
  return (
    <DummyStack.Navigator initialRouteName={Routes.Dummy} screenOptions={customHeaderNavigator}>
      <DummyStack.Screen name={Routes.Dummy} component={Dummy} options={{ title: 'Dummy' }} />
    </DummyStack.Navigator>
  );
};

const AppTab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = '';
            if (route.name === Routes.BookList) {
              iconName = 'library-outline';
            } else if (route.name === Routes.Dummy) {
              iconName = 'apps-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: cerulean,
          inactiveTintColor: dustyGray,
          labelStyle: {
            fontSize: 13
          }
        }}>
        <AppTab.Screen
          name={Routes.BookList}
          component={BookListStackScreen}
          options={{ title: 'Library' }}
        />
        <AppTab.Screen name={Routes.Dummy} component={DammyStackScreen} />
      </AppTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
