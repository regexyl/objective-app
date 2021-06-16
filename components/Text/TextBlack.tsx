import React from "react";
import { Text, StyleSheet } from "react-native";

interface TextBlackProps {
  numberOfLines?: number;
  style?: Object;
  children: React.ReactNode;
}

const TextBlack: React.FC<TextBlackProps> = ({
  numberOfLines,
  style,
  children,
}: TextBlackProps) => {
  return (
    <Text
      numberOfLines={numberOfLines || 10}
      style={{ ...styles.text, ...style }}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "lato-black",
  },
});

export default TextBlack;
