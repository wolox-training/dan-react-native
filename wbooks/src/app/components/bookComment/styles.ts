import { StyleSheet } from 'react-native';
import { white, tundora, dustyGray } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%'
  },
  image: {
    borderRadius: 50,
    height: 50,
    width: 50
  },
  containerInfo: {
    backgroundColor: white,
    marginHorizontal: 10,
    borderBottomColor: dustyGray,
    borderBottomWidth: 1,
    maxWidth: '85%'
  },
  author: {
    color: tundora,
    fontSize: 15,
    fontWeight: 'bold'
  },
  text: {
    color: dustyGray,
    maxWidth: '95%',
    fontSize: 12
  }
});
