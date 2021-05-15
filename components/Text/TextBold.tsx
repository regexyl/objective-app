import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextBold = (props: any) => {
  return <Text numberOfLines={props.numberOfLines || 10} style={{...styles.text, ...props.style}}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'lato-bold'
  }
});

export default TextBold;