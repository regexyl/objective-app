// Displayed if user currently has uncompleted objectives.

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

import { HomeNavProps, HomeParamList } from "types";
import Colors from "../../../constants/Colors";
import TextDefault from "../../../components/Text/TextDefault";
import TextBold from "../../../components/Text/TextBold";
import TextBlack from "../../../components/Text/TextBlack";
import ButtonWhite from "../../../components/Buttons/ButtonWhite";
import ButtonWhiteIcon from "../../../components/Buttons/ButtonWhiteIcon";
import CancelObjCreationButton from "../../../components/IconButtons/CancelObjCreationButton";

export interface Objective2ScreenProps {
  navigation: StackNavigationProp<HomeParamList, "Objective2Screen">;
}

const Objective2Screen: React.FC<Objective2ScreenProps> = ({
  route,
  navigation,
}: HomeNavProps<"Objective2Screen">) => {
  console.log("objective2screen route: ", route);
  const { objectiveTitle } = route.params;

  const goToNextScreen = () => {
    navigation.navigate("Objective3Screen", {
      objectiveTitle: objectiveTitle,
      type: "accountability",
    });
  };

  return (
    <View style={styles.screen}>
      <CancelObjCreationButton />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Choose how you'd like to complete your objective.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonWhiteIcon style={styles.selectButton} onPress={goToNextScreen}>
          <Ionicons
            size={40}
            style={{
              marginBottom: -10,
              marginTop: 5,
              color: Colors.primary,
              textAlign: "center",
            }}
            name="people-circle-outline"
          />
          <TextBold style={styles.buttonText}>
            With an accountability partner
          </TextBold>
        </ButtonWhiteIcon>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonWhiteIcon
          style={styles.selectButton}
          onPress={() =>
            navigation.navigate("Objective4Screen", {
              objectiveTitle: objectiveTitle,
              type: "solo",
              description: null,
            })
          }
        >
          <Ionicons
            size={40}
            style={{
              marginBottom: -10,
              marginTop: 5,
              color: Colors.primary,
              textAlign: "center",
            }}
            name="person-circle-outline"
          />
          <TextBold style={styles.buttonText}>Solo</TextBold>
        </ButtonWhiteIcon>
      </View>
      <ButtonWhite
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        {"<"} Back
      </ButtonWhite>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 50,
  },
  headerContainer: {
    width: "80%",
    marginTop: 50,
  },
  headerText: {
    fontSize: 30,
    color: Colors.taintedWhite,
  },
  buttonContainer: {
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.primary,
    paddingVertical: 10,
    fontSize: 16,
  },
  selectButton: {
    padding: 10,
  },
  backButton: {
    width: 130,
    marginVertical: 50,
  },
});

export default Objective2Screen;
