import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import TextDefault from "../Text/TextDefault";

interface ButtonOutlineGrayProps {
  onPress: () => {};
  style: Object;
  title: string;
}

const ButtonOutlineGray: React.FC<ButtonOutlineGrayProps> = ({
  onPress,
  style,
  title,
}: ButtonOutlineGrayProps) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
      <TextDefault style={styles.editProfileText}>{title}</TextDefault>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.darkGray,
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  editProfileText: {
    color: Colors.darkGray,
    fontSize: 16,
  },
});

export default ButtonOutlineGray;
