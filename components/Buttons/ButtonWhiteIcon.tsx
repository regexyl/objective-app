import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import TextBold from "../Text/TextBold";

const ButtonWhiteIcon = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>{props.children}</View>
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
