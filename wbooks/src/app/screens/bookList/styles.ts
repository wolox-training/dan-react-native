import { StyleSheet } from 'react-native';
import { polar, transparent } from '@constants/colors';

const MAX_SEPARATOR = 10;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: polar,
    justifyContent: 'center',
    flex: 1
  },
  contentContainer: {
    paddingTop: MAX_SEPARATOR
  },
  separator: {
    backgroundColor: transparent,
    height: MAX_SEPARATOR
  }
});
