import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { CustomButtonTheme, getButtonStyle } from './utils';

interface Props {
  text: string;
  stylesButton: CustomButtonTheme;
}

function CustomButton({ text, stylesButton }: Props) {
  const { styleText, styleBackground } = getButtonStyle(stylesButton);
  return (
    <TouchableOpacity style={[styles.btnDefault, styleBackground]}>
      <Text style={[styles.btnTextDefault, styleText]}> {text} </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
