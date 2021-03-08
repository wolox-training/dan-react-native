import styles from './styles';

export enum BUTTONTHEME {
  OUTLINE = 'Outline',
  GRADIENTS = 'Gradients'
}

export interface Props {
  styleText?: Object;
  styleBackground?: Object;
}

export function getButtonStyle(type: string) {
  const result: Props = {};
  switch (type) {
    case BUTTONTHEME.OUTLINE: {
      result.styleText = styles.btnTextOutline;
      result.styleBackground = styles.btnOutline;
      break;
    }
    case BUTTONTHEME.GRADIENTS: {
      result.styleText = styles.btnTextGradients;
      result.styleBackground = styles.btnGradients;
      break;
    }
    default: {
      break;
    }
  }
  return result;
}
