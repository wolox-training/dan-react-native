import { StyleSheet } from 'react-native';
import { white, tundora, dustyGray } from '@constants/colors';

const SQUAREIMAGE = 50;

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    flexDirection: 'row',
    padding: 20
  },
  image: {
    borderRadius: 50,
    height: SQUAREIMAGE,
    width: SQUAREIMAGE
  },
  containerInfo: {
    backgroundColor: white,
    paddingHorizontal: 10,
    maxWidth: '85%'
  },
  author: {
    color: tundora,
    fontSize: 15,
    fontWeight: 'bold'
  },
  text: {
    color: dustyGray,
    maxWidth: '100%',
    fontSize: 12
  }
});
