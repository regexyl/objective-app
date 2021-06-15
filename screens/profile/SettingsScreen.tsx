import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { auth } from "../../src/firebase/config";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import ButtonGradient from "../../components/Buttons/ButtonGradient";
import TextDefault from "../../components/Text/TextDefault";
import TextBold from "../../components/Text/TextBold";
import { TouchableOpacity } from "react-native-gesture-handler";

const SettingsScreen = ({ navigation }: any) => {
  const onLogOut = () => {
    auth
      .signOut()
      .then((result) => {
        console.log("SIGN OUT SUCCESSFUL");
        console.log("logged out result is: ", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            size={30}
            style={{
              color: Colors.accent,
              marginRight: 10,
              marginBottom: -10,
              marginTop: 5,
            }}
            name="arrow-back"
          />
        </TouchableOpacity>
        <TextBold style={styles.headerText}>Settings</TextBold>
      </View>
      <View style={styles.content}>
        <View style={styles.settingsOptions}>
          <TouchableOpacity>
            <TextDefault style={styles.textButton}>
              Upgrade to Premium
            </TextDefault>
          </TouchableOpacity>
          <TouchableOpacity>
            <TextDefault style={styles.textButton}>
              Report a Problem
            </TextDefault>
          </TouchableOpacity>
        </View>
        <ButtonGradient onPress={onLogOut}>Log Out</ButtonGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 26,
  },
  headerText: {
    textAlign: "center",
    fontSize: 28,
    flex: 1,
    paddingRight: 40,
  },
  content: {
    paddingHorizontal: 10,
  },
  settingsOptions: {
    marginVertical: 20,
  },
  textButton: {
    color: Colors.primary,
    fontSize: 20,
    marginBottom: 14,
  },
});

export default SettingsScreen;
