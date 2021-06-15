// For choosing type of objective (i.e. w/accountability partner or by user himself)

import React, { useState } from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-paper";

import Colors from "../../../constants/Colors";
import ButtonCard from "../../../components/Buttons/ButtonCard";
import TextDefault from "../../../components/Text/TextDefault";
import TextBold from "../../../components/Text/TextBold";
import TextBlack from "../../../components/Text/TextBlack";
import ButtonWhite from "../../../components/Buttons/ButtonWhite";
import CancelObjCreationButton from "../../../components/IconButtons/CancelObjCreationButton";

const Objective1Screen = ({ navigation }: Props) => {
  const [objectiveTitle, setObjectiveTitle] = useState("");
  const [warningContainer, setWarningContainer] = useState<JSX.Element>(null);

  const onChangeInput = (input: any) => {
    setObjectiveTitle(input);
    setWarningContainer(null);
  };

  const goToNextScreen = () => {
    if (objectiveTitle.length > 0) {
      navigation.navigate("Objective2Screen", {
        objectiveTitle: objectiveTitle,
      });
    } else {
      setWarningContainer(warning);
    }
  };

  const warning = (
    <TextDefault style={styles.warning}>
      Please fill in your objective.
    </TextDefault>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screen}>
        <CancelObjCreationButton />
        <View style={styles.headerContainer}>
          <TextBold style={styles.headerFirstLine}>WHAT IS YOUR</TextBold>
          <TextBold style={styles.headerSecondLine}>OBJECTIVE?</TextBold>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/images/objective-logo-dark.png")}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            label="Objective"
            onChangeText={onChangeInput}
            value={objectiveTitle}
          ></TextInput>
          {warningContainer}
        </View>
        <ButtonCard style={styles.createButton} onPress={goToNextScreen}>
          Create my objective
        </ButtonCard>
        <View style={styles.footerContainer}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  headerContainer: {
    // marginTop: 30
  },
  headerFirstLine: {
    color: Colors.taintedWhite,
    textAlign: "center",
    fontSize: 26,
  },
  headerSecondLine: {
    color: Colors.taintedWhite,
    textAlign: "center",
    fontSize: 48,
  },
  imageContainer: {},
  logo: {
    width: 120,
    height: 120,
    marginVertical: 40,
    resizeMode: "contain",
  },
  inputContainer: {},
  input: {
    width: 320,
    height: 60,
    backgroundColor: Colors.snowWhite,
  },
  createButton: {
    marginTop: 60,
    paddingHorizontal: 30,
  },
  warning: {
    color: Colors.taintedWhite,
    fontSize: 18,
    marginTop: 8,
    textAlign: "center",
  },
  footerContainer: {},
});

export default Objective1Screen;
