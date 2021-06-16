import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import TextBold from "../Text/TextBold";

interface ButtonWhiteProps {
  onPress: () => void;
  style?: Object;
  children: React.ReactNode;
}

const ButtonWhite: React.FC<ButtonWhiteProps> = ({
  onPress,
  style,
  children,
}: ButtonWhiteProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, ...style }}>
        <TextBold style={styles.buttonText}>{children}</TextBold>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    backgroundColor: Colors.taintedWhite,
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: "center",
  },
});

export default ButtonWhite;
