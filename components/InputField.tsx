import React from "react";
import { TextInput, StyleSheet, KeyboardTypeOptions } from "react-native";

import Colors from "../constants/Colors";

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

const InputField: React.FC<InputFieldProps> = ({
  secureTextEntry,
  onChangeText,
  value,
  placeholder,
  keyboardType,
  autoCapitalize,
}: InputFieldProps) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry || false}
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      placeholderTextColor={Colors.darkGray}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.placeholder,
  },
});

export default InputField;
