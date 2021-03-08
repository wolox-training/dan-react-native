import { StyleSheet } from 'react-native';
import { white, tundora, dustyGray } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: '100%'
  },
  containerBook: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20
  },
  containerInfo: {
    paddingStart: 20
  },
  image: {
    height: 120,
    resizeMode: 'contain',
    width: 70
  },
  title: {
    color: tundora,
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: 150
  },
  subTitle: {
    color: dustyGray,
    fontSize: 16
  },
  genre: {
    textTransform: 'capitalize'
  }
});
