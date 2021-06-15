import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { windowWidth } from "../../src/local/config";

const InputDate = (props: any) => {
  return (
    <TextInput
      style={{ ...styles.deadlineTextInput, ...props.style }}
      placeholder="DD/MM/YYYY"
      value={props.deadlineValue}
      onFocus={props.deadlineOnFocus}
      selectTextOnFocus={false}
      showSoftInputOnFocus={false}
      caretHidden={true}
    />
  );
};

const styles = StyleSheet.create({
  deadlineTextInput: {
    height: windowWidth / 16 + 5,
  },
});

export default InputDate;
