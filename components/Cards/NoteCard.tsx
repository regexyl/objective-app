import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import TextDefault from "../Text/TextDefault";
import TextBold from "../Text/TextBold";

const NoteCard = (props: any) => {
  return (
    <View style={{ ...styles.note, ...props.style }}>
      <TextBold style={styles.noteTitle}>NOTE</TextBold>
      <TextDefault style={styles.noteText}>{props.children}</TextDefault>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    backgroundColor: "#D2EEFF",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 14,
  },
  noteTitle: {
    color: Colors.primary,
    fontSize: 16,
    marginBottom: 4,
  },
  noteText: {
    color: Colors.primary,
    fontSize: 15,
    marginBottom: 6,
  },
});

export default NoteCard;
