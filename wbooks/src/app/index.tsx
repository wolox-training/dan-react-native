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

import styles from './styles';
import CustomIconTabBar from './components/customTabBarIcon';

const customHeaderNavigator: StackNavigationOptions = {
  headerTintColor: white,
  headerTitleStyle: {
    textTransform: 'uppercase'
  },
  headerBackground: () => (
    <Image style={[styles.headerImage, StyleSheet.absoluteFill]} source={bcNavBar} resizeMode="stretch" />
  )
};

const StackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const LibraryStackScreen = () => {
  return (
    <StackNavigator.Navigator headerMode="none">
      <StackNavigator.Screen name={Routes.BookList} component={BookList} options={{ title: 'Library' }} />
      <StackNavigator.Screen name={Routes.Home} component={BookHome} options={{ title: 'Home' }} />
    </StackNavigator.Navigator>
  );
};

const TabNavigatorScreen = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return <CustomIconTabBar route={route.name} focused={focused} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: cerulean,
        inactiveTintColor: dustyGray,
        labelStyle: {
          fontSize: 13
        }
      }}>
      <TabNavigator.Screen name={'Library'} component={LibraryStackScreen} />
      <TabNavigator.Screen name={Routes.Dummy} component={Dummy} />
    </TabNavigator.Navigator>
  );
};

const AppStack = () => (
  <>
    <StackNavigator.Screen name={'Library'} component={TabNavigatorScreen} />
    <StackNavigator.Screen name={Routes.Dummy} component={Dummy} />
  </>
);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={customHeaderNavigator}>{AppStack()}</StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
