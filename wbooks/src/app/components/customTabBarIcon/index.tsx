import React from 'react';
import { Image } from 'react-native';

import { getData } from './utils';

interface Props {
  route: string;
  focused: boolean;
}

function CustomTabBarIcon({ route, focused }: Props) {
  const data = getData({ route, focused });
  return <Image source={data.source} style={data.style} />;
}

export default CustomTabBarIcon;
