import styles from './styles';

export enum CustomButtonTheme {
  OUTLINE = 'Outline',
  GRADIENTS = 'Gradients'
}

export function getButtonStyle(type: CustomButtonTheme) {
  switch (type) {
    case CustomButtonTheme.OUTLINE: {
      return { styleText: styles.btnTextOutline, styleBackground: styles.btnOutline };
    }
    case CustomButtonTheme.GRADIENTS: {
      return { styleText: styles.btnTextGradients, styleBackground: styles.btnGradients };
    }
    default: {
      return {};
    }
  }
}
