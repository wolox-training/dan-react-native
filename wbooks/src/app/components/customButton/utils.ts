import styles from './styles';

export enum BUTTONTHEME {
  OUTLINE = 'Outline',
  GRADIENTS = 'Gradients'
}

export function getButtonStyle(type: BUTTONTHEME) {
  switch (type) {
    case BUTTONTHEME.OUTLINE: {
      return { styleText: styles.btnTextOutline, styleBackground: styles.btnOutline };
    }
    case BUTTONTHEME.GRADIENTS: {
      return { styleText: styles.btnTextGradients, styleBackground: styles.btnGradients };
    }
    default: {
      return {};
    }
  }
}
