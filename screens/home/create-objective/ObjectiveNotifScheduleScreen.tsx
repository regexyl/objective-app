import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ScrollView,
  StyleSheet,
  LogBox,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";
import moment from "moment";

import { convertStringToDate } from "../../../util/helper";
import { windowHeight, windowWidth } from "../../../src/local/config";
import Colors from "../../../constants/Colors";
import SubObjective from "../../../models/subObjective";
import TextDefault from "../../../components/Text/TextDefault";
import TextBold from "../../../components/Text/TextBold";
import ButtonOutline from "../../../components/Buttons/ButtonOutline";
import ButtonWhite from "../../../components/Buttons/ButtonWhite";
import NoteCard from "../../../components/Cards/NoteCard";
import SubObjInput from "../../../components/Inputs/SubObjInput";
import InputDate from "../../../components/Inputs/InputDate";
import ButtonCard from "../../../components/Buttons/ButtonCard";

const ObjectiveNotifScheduleScreen = ({ route, navigation }: Props) => {
  const { objectiveTitle, type, description, subObjectives } = route.params;

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDaySetting, setSelectedDaySetting] = useState();
  const pickerDaySettingRef = useRef(null);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideTimePicker();
  };

  const open = () => {
    pickerDaySettingRef.current.focus();
  };

  const close = () => {
    pickerDaySettingRef.current.blur();
  };

  return (
    <View style={styles.screen}>
      {/* <View style={styles.paddedContainer}>
        <View style={styles.headerContainer}>
          <TextBold style={styles.headerText}>Set Objective Settings</TextBold>
          <TextDefault style={styles.subHeaderText}>
            Get notifications for reminders to work towards your objective.
          </TextDefault>
        </View>
      </View> */}

      <View style={{ alignItems: "center", width: 350 }}>
        <Text style={{ fontSize: 60 }}>✅</Text>
        <TextBold style={styles.headerText}>
          You have created your objective!
        </TextBold>
        <TextDefault style={styles.subHeaderText}>
          Get notifications for reminders to work towards your objective.
        </TextDefault>
        <ButtonCard onPress={() => navigation.navigate("HomeScreen")}>
          Return to home
        </ButtonCard>
      </View>

      {/* <View style={styles.fullWidthContainer}>
        <View style={styles.timelineHeader}>
          <TextBold style={styles.fullWidthHeader}>
            How often do you want to be reminded?
          </TextBold>
        </View>
      </View>
      <View style={styles.paddedContainer}>
        <View style={styles.buttonContainer}>
          <ButtonWhite
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            {"<"} Back
          </ButtonWhite>
          <ButtonWhite
            style={styles.button}
            onPress={() =>
              navigation.navigate("ObjectiveSummaryScreen", {
                objectiveTitle: objectiveTitle,
                type: type,
                description: description,
                subObjectives: subObjectives,
              })
            }
          >
            Continue {">"}
          </ButtonWhite>
        </View>
        <ButtonWhite onPress={open}>Open Day Settings</ButtonWhite>
      </View>
      <Picker
        ref={pickerDaySettingRef}
        selectedValue={selectedDaySetting}
        mode="dialog"
        onValueChange={(itemValue, itemIndex) =>
          setSelectedDaySetting(itemValue)
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   backgroundColor: Colors.primary,
  //   paddingVertical: 50,
  // },
  screen: {
    flex: 1,
    backgroundColor: Colors.snowWhite,
    paddingTop: 300,
    alignItems: "center",
  },
  paddedContainer: {
    paddingHorizontal: 50,
  },
  headerContainer: {
    width: "80%",
    marginTop: 50,
  },
  // headerText: {
  //   fontSize: 30,
  //   color: Colors.taintedWhite,
  // },
  headerText: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  // subHeaderText: {
  //   marginVertical: 10,
  //   fontSize: 17,
  //   color: Colors.taintedWhite,
  // },
  subHeaderText: {
    marginVertical: 10,
    fontSize: 17,
    color: "black",
    textAlign: "center",
  },
  cardContainer: {
    marginVertical: 4,
  },
  card: {
    marginVertical: 6,
  },
  fullWidthContainer: {
    backgroundColor: Colors.taintedWhite,
    marginTop: 20,
    marginBottom: 10,
    padding: 20,
  },
  timelineHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  fullWidthHeader: {
    fontSize: 22,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  button: {
    width: 130,
  },
});

export default ObjectiveNotifScheduleScreen;
