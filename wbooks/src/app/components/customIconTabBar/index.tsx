import React from 'react';
import { Image } from 'react-native';
import Routes from '@constants/routes';
import iconTabBar from '@assets/tabBar/index';

interface Props {
  route: string;
  focused: boolean;
}

function CustomIconTabBar({ route, focused }: Props) {
  let currentIcon = null;

  switch (route) {
    case Routes.BookList: {
      currentIcon = focused ? iconTabBar.icLibraryActive : iconTabBar.icLibrary;
      break;
    }
    case Routes.Dummy: {
      currentIcon = focused ? iconTabBar.icSettingsActive : iconTabBar.icSettings;
      break;
    }
    default: {
      break;
    }
  }

  return <Image source={currentIcon} />;
}

export default CustomIconTabBar;
