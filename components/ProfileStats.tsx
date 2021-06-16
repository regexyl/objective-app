import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import TextDefault from "./Text/TextDefault";
import TextBold from "./Text/TextBold";

interface ProfileStatsProps {
  title: string;
  stats: string;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({
  title,
  stats,
}: ProfileStatsProps) => {
  return (
    <View>
      <TextBold style={styles.header}>{title}</TextBold>
      <TextDefault style={styles.stats}>{stats}</TextDefault>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: Colors.primary,
    fontSize: 16,
  },
  stats: {
    paddingTop: 4,
    color: Colors.accent,
    fontSize: 26,
  },
});

export default ProfileStats;
