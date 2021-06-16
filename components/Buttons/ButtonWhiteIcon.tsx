import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

interface ButtonWhiteIconProps {
  onPress: () => void;
  style?: Object;
  children: React.ReactNode;
}

const ButtonWhiteIcon: React.FC<ButtonWhiteIconProps> = ({
  onPress,
  style,
  children,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, ...style }}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    backgroundColor: Colors.taintedWhite,
    padding: 40,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: "center",
  },
});

export default ButtonWhiteIcon;
