import { StyleSheet } from 'react-native';
import { cerulean, iron, white } from '@constants/colors';

export default StyleSheet.create({
  contentContainer: {
    backgroundColor: white,
    borderRadius: 5,
    marginVertical: 10,
    paddingBottom: 20
  },
  separator: {
    backgroundColor: iron,
    borderRadius: 50,
    height: 1,
    marginLeft: 70,
    marginRight: 20
  },
  containerFooter: {
    alignItems: 'center'
  },
  textFooter: {
    color: cerulean,
    fontSize: 15
  }
});
