import { StyleSheet } from 'react-native';
import { cerulean, transparent, white } from '@constants/colors';

export default StyleSheet.create({
  btnDefault: {
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10
  },
  btnTextDefault: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  btnOutline: {
    backgroundColor: transparent,
    borderColor: cerulean,
    borderWidth: 1
  },
  btnTextOutline: {
    color: cerulean
  },
  btnGradients: {
    backgroundColor: cerulean,
    borderColor: cerulean
  },
  btnTextGradients: {
    color: white
  }
});
