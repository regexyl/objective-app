import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import TextBold from "../Text/TextBold";
import Colors from "../../constants/Colors";

interface ButtonCustomProps {
  onPress: () => {};
  style: {};
  textStyle?: Object;
  children: React.ReactNode;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  onPress,
  style,
  textStyle,
  children,
}: ButtonCustomProps) => {
  return (
    <TouchableOpacity style={{ ...style }} onPress={onPress}>
      <TextBold style={{ ...styles.text, ...textStyle }}>{children}</TextBold>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.primary,
    fontSize: 16,
  },
});

export default ButtonCustom;
