import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import TextDefault from "../Text/TextDefault";
import TextBold from "../Text/TextBold";

interface NoteCardProps {
  style: Object;
  children: React.ReactNode;
}

const NoteCard: React.FC<NoteCardProps> = ({
  style,
  children,
}: NoteCardProps) => {
  return (
    <View style={{ ...styles.note, ...style }}>
      <TextBold style={styles.noteTitle}>NOTE</TextBold>
      <TextDefault style={styles.noteText}>{children}</TextDefault>
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
