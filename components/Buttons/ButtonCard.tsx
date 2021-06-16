import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { windowHeight, windowWidth } from "../../src/local/config";
import Colors from "../../constants/Colors";
import TextBold from "../Text/TextBold";

interface ButtonCardProps {
  onPress: () => void;
  style?: Object;
  children: React.ReactNode;
}

const ButtonCard: React.FC<ButtonCardProps> = ({
  onPress,
  style,
  children,
}: ButtonCardProps) => {
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
    justifyContent: "center",
    backgroundColor: Colors.snowWhite,
    paddingVertical: windowHeight * 0.015,
    paddingHorizontal: windowWidth * 0.1,
    borderRadius: 10,
    marginVertical: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default ButtonCard;
