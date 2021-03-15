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
// import { Image, StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookList from '@screens/bookList';
import BookHome from '@screens/bookHome';
import { cerulean, dustyGray } from '@constants/colors';
// import headerImageBackground from '@assets/bc_nav_bar.png';
import { bookHomeScreenRoute, bookListScreenRoute, dummyScreenRoute } from '@constants/routes';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import Dummy from './screens/dummy';

const customHeaderNavigator: StackNavigationOptions = {
  headerTintColor: cerulean,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    textTransform: 'uppercase'
  }
  // headerBackground: () => (
  //   <Image
  //     style={StyleSheet.absoluteFill}
  //     source={headerImageBackground}
  //     // width={450}
  //     // height={60}
  //     resizeMode="stretch"
  //   />
  // )
};

const BookListStack = createStackNavigator();
const BookListStackScreen = () => {
  return (
    <BookListStack.Navigator initialRouteName={bookListScreenRoute} screenOptions={customHeaderNavigator}>
      <BookListStack.Screen name={bookHomeScreenRoute} component={BookHome} options={{ title: 'Home' }} />
      <BookListStack.Screen name={bookListScreenRoute} component={BookList} options={{ title: 'Library' }} />
    </BookListStack.Navigator>
  );
};

const DummyStack = createStackNavigator();
const DammyStackScreen = () => {
  return (
    <DummyStack.Navigator initialRouteName={dummyScreenRoute} screenOptions={customHeaderNavigator}>
      <DummyStack.Screen name={dummyScreenRoute} component={Dummy} options={{ title: 'Dummy' }} />
    </DummyStack.Navigator>
  );
};

const AppTab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName = '';

        //     if (route.name === bookListScreenRoute) {
        //       iconName = focused ? 'address-card' : 'ios-information-circle-outline';
        //     } else if (route.name === dummyScreenRoute) {
        //       iconName = focused ? 'android' : 'ios-list';
        //     }

        //     // You can return any component that you like here!
        //     return <Icon name={iconName} size={size} color={color} />;
        //   }
        // })}
        tabBarOptions={{
          activeTintColor: cerulean,
          inactiveTintColor: dustyGray
        }}>
        <AppTab.Screen
          name={bookListScreenRoute}
          component={BookListStackScreen}
          options={{ title: 'Library' }}
        />
        <AppTab.Screen name={dummyScreenRoute} component={DammyStackScreen} />
      </AppTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
