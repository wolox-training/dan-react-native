import { StyleSheet } from 'react-native';
import { white, tundora, dustyGray } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    flexDirection: 'row',
    padding: 20
  },
  image: {
    borderRadius: 50,
    height: 50,
    width: 50
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
