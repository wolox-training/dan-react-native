import tabBarIcon from '@assets/tabBar/index';
import Routes from '@constants/routes';

import styles from './styles';

interface Props {
  route: string;
  focused: boolean;
}

export const getData = ({ route, focused }: Props) => {
  switch (route) {
    case Routes.BookList: {
      return { source: tabBarIcon.icLibrary, style: focused ? styles.active : styles.inactive };
    }
    default: {
      return {
        source: tabBarIcon.icSettings,
        style: focused ? styles.active : styles.inactive
      };
    }
  }
};
