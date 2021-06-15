import React from "react";
import { Text, StyleSheet } from "react-native";

const TextBlack = (props: any) => {
  return (
    <Text
      numberOfLines={props.numberOfLines || 10}
      style={{ ...styles.text, ...props.style }}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "lato-black",
  },
});

export default TextBlack;
