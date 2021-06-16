import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import TextDefault from "../Text/TextDefault";
import TextBold from "../Text/TextBold";

interface WarningCardProps {
  style: Object;
  children: React.ReactNode;
}

const WarningCard: React.FC<WarningCardProps> = ({
  style,
  children,
}: WarningCardProps) => {
  return (
    <View style={{ ...styles.note, ...style }}>
      <TextBold style={styles.noteTitle}>WARNING</TextBold>
      <TextDefault style={styles.noteText}>{children}</TextDefault>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    backgroundColor: Colors.lightRed,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 14,
  },
  noteTitle: {
    color: Colors.darkRed,
    fontSize: 16,
    marginBottom: 4,
  },
  noteText: {
    color: Colors.darkRed,
    fontSize: 15,
    marginBottom: 6,
  },
});

export default WarningCard;
