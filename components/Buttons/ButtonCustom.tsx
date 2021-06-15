import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import TextBold from "../Text/TextBold";
import Colors from "../../constants/Colors";

const ButtonCustom = (props: any) => {
  return (
    <TouchableOpacity
      style={{ ...props.backgroundStyle }}
      onPress={props.onPress}
    >
      <TextBold style={{ ...styles.text, ...props.textStyle }}>
        {props.children}
      </TextBold>
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
