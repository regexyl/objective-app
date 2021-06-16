import React from "react";
import { Text, StyleSheet } from "react-native";

interface TextDefaultProps {
  numberOfLines?: number;
  style?: Object;
  children: React.ReactNode;
}

const TextDefault: React.FC<TextDefaultProps> = ({
  numberOfLines,
  style,
  children,
}: TextDefaultProps) => {
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
    fontFamily: "lato-regular",
  },
});

export default TextDefault;
