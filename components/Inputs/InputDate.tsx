import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { windowWidth } from "../../src/local/config";

interface InputDateProps {
  style: Object;
  deadlineValue: string;
  deadlineOnFocus: () => {};
}

const InputDate: React.FC<InputDateProps> = ({
  style,
  deadlineValue,
  deadlineOnFocus,
}: InputDateProps) => {
  return (
    <TextInput
      style={{ ...styles.deadlineTextInput, ...style }}
      placeholder="DD/MM/YYYY"
      value={deadlineValue}
      onFocus={deadlineOnFocus}
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
