import { StyleSheet } from 'react-native';
import { polar } from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: polar,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  headerImage: {
    width: '100%',
    height: 70
  }
});
