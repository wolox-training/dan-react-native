import { StyleSheet } from 'react-native';
import { polar, transparent, white, cerulean } from '@constants/colors';

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
  },
  button: {
    backgroundColor: cerulean,
    width: '90%',
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: polar
  },
  buttonTitle: {
    color: white,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
