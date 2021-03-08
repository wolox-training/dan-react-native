import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { getButtonStyle } from './utils';

export interface Props {
  text: string;
  stylesButton: string;
}

function Button({ text, stylesButton }: Props) {
  const { styleText, styleBackground } = getButtonStyle(stylesButton);
  return (
    <TouchableOpacity>
      <View style={[styles.btnDefault, styleBackground]}>
        <Text style={[styles.btnTextDefault, styleText]}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
