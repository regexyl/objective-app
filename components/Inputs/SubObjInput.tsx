import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import { windowHeight, windowWidth } from "../../src/local/config";
import ButtonCustom from "../../components/Buttons/ButtonCustom";
import InputDate from "../../components/Inputs/InputDate";

const SubObjInput = (props: any) => {
  return (
    <View style={styles.newRow}>
      <View style={styles.finalObjective}>
        <View style={styles.whiteCircle} />
        <View style={styles.objectiveText}>
          <TextInput
            style={styles.objectiveTextInput}
            placeholder="Add smaller objectives"
            onChangeText={props.onChangeText}
            value={props.subTitleValue}
          />
        </View>
        <View style={styles.deadlineText}>
          <InputDate
            deadlineValue={props.deadlineValue}
            deadlineOnFocus={props.deadlineOnFocus}
          />
        </View>
        <ButtonCustom style={styles.subtractButton} onPress={props.onPress}>
          <Ionicons
            size={24}
            style={{
              color: Colors.primary,
              marginRight: 10,
              marginBottom: -10,
              marginTop: 5,
            }}
            name="remove"
          />
        </ButtonCustom>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newRow: {
    marginTop: 10,
  },
  whiteCircle: {
    width: windowWidth / 18,
    height: windowWidth / 18,
    borderRadius: windowWidth / 2,
    backgroundColor: Colors.taintedWhite,
    borderColor: Colors.accent,
    borderWidth: 3,
    marginTop: 3,
  },
  finalObjective: {
    flexDirection: "row",
  },
  objectiveText: {
    marginLeft: 14,
    width: windowWidth * 0.5,
    paddingRight: 10,
  },
  objectiveTextInput: {
    height: windowWidth / 16 + 5,
  },
  objectiveTitle: {
    fontSize: 17,
    color: Colors.accent,
  },
  deadlineText: {
    width: windowWidth * 0.25,
  },
  deadlineTextInput: {
    height: windowWidth / 16 + 5,
  },
  subtractButton: {
    marginLeft: 10,
  },
});

export default SubObjInput;
