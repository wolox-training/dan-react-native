import { StyleSheet, Dimensions } from 'react-native';
import { black, white } from '@constants/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  containerBook: {
    alignItems: 'flex-start',
    backgroundColor: white,
    borderRadius: 3,
    flexDirection: 'row',
    padding: 20
  },
  containerInfo: {
    paddingLeft: 10
  },
  image: {
    height: 65,
    width: 65
  },
  title: {
    color: black,
    fontSize: 15,
    maxWidth: width - 150
  },
  author: {
    color: black,
    fontSize: 13
  }
});
