import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../Config/ColorPallet';
import {fonststyle} from '../Config/fontstyles';

export default function Custominput({style, placeholder, secure, ...rest}) {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#1B1B1B"
        style={[styles.textinput, style]}
        secureTextEntry={secure}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 3,
    borderColor: '#354341',
    borderRadius: 10,
    marginVertical: 10,

    paddingHorizontal: 15,
    ...fonststyle.description,
    fontSize: 15,
    fontWeight: 'normal',
    letterSpacing: 2,

    color: COLORS.textinput,
  },
});
