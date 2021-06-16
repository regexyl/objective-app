import React from "react";
import { Text, StyleSheet } from "react-native";

interface TextBoldProps {
  numberOfLines?: number;
  style?: Object;
  children: React.ReactNode;
}

const TextBold: React.FC<TextBoldProps> = ({
  numberOfLines,
  style,
  children,
}: TextBoldProps) => {
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
    fontFamily: "lato-bold",
  },
});

export default TextBold;
