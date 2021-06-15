import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { tailwind } from "tailwind";

import { windowHeight, windowWidth } from "../../../src/local/config";
import Colors from "../../../constants/Colors";
import ButtonGradient from "../../../components/Buttons/ButtonGradient";
import ObjectiveSummaryCard from "../../../components/Cards/ObjectiveSummaryCard";
import CloseIconButton from "../../../components/IconButtons/CloseIconButton";

const ObjectiveDetailScreen = ({ navigation, route }: Props) => {
  const { item } = route.params;

  const markObjectiveCompleted = () =>
    Alert.alert(
      "Have you really met your objective?",
      "Make sure that you've hit your final goal, and this will be saved to your profile!",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => console.log("Completed pressed"),
        },
      ]
    );

  const delObjectiveAlert = () =>
    Alert.alert(
      "Are you sure?",
      "The deletion of this objective will be recorded as a failed one, and saved to your profile.",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => console.log("Ask me later pressed"),
        },
      ]
    );

  return (
    <View style={styles.screen}>
      <View style={styles.banner}></View>

      <CloseIconButton onPress={() => navigation.navigate("HomeScreen")} />

      <View style={styles.headerContainer}>
        <SharedElement id="1">
          <ObjectiveSummaryCard />
        </SharedElement>
      </View>

      <View style={styles.bodyContainer}>
        {/* Card to view partner's progress */}
        {/* <TouchableOpacity>
          <View style={styles.card}>
            <View
              style={tailwind(
                "bg-white w-full px-5 pt-4 pb-3.5 rounded-lg items-center"
              )}
            >
              <View style={styles.partnerCardContent}>
                <View>
                  <Text style={tailwind("font-lato-bold text-lg")}>
                    @ajowax is making progress!
                  </Text>
                  <Text>View your partner's progress and chat.</Text>
                </View>
                <Ionicons
                  name="eye-outline"
                  size={28}
                  color="#000"
                  // style={styles.cancel}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity> */}

        {/* Mark objective as completed */}
        <TouchableOpacity onPress={markObjectiveCompleted}>
          <View
            style={tailwind(
              "border-2 border-green-600 bg-green-600 text-white rounded-lg py-1.5 px-20 mb-3"
            )}
          >
            <Text
              style={tailwind(
                "font-lato-bold text-green-600 bg-green-600 text-white text-base"
              )}
            >
              Mark as completed
            </Text>
          </View>
        </TouchableOpacity>

        {/* Delete objective */}
        <TouchableOpacity onPress={delObjectiveAlert}>
          <View
            style={tailwind("border-2 border-gray-400 rounded-lg py-1.5 px-28")}
          >
            <Text style={tailwind("font-lato-bold text-gray-400 text-base")}>
              Delete
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Personal progress timeline */}
      {/* Notification on status - you're behind time! or 10 more days to go */}
      {/* Add-on: Journal */}
      {/* View partner's progress or chat */}
      {/* Add-on: Edit goal */}
      {/* Delete goal */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  banner: {
    width: windowWidth,
    height: windowHeight * 0.25,
    backgroundColor: Colors.primary,
    position: "absolute",
  },
  headerContainer: {
    marginTop: windowHeight * 0.1,
    alignItems: "center",
  },
  bodyContainer: {
    paddingTop: windowHeight * 0.05,
    alignItems: "center",
  },
  card: {
    width: windowWidth * 0.83,
    height: windowHeight * 0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  partnerCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

ObjectiveDetailScreen.sharedElements = (
  navigation,
  otherNavigation,
  showing
) => {
  //   const { item } = route.params;
  return [
    {
      id: "1",
      animation: "move",
      resize: "clip",
    },
  ];
};

export default ObjectiveDetailScreen;
