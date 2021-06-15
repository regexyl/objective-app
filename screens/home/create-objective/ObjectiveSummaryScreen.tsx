import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { tailwind } from "tailwind";
import LottieView from "lottie-react-native";

import { db, auth } from "../../../src/firebase/config";
import { windowHeight, windowWidth } from "../../../src/local/config";
import Colors from "../../../constants/Colors";
import ButtonCard from "../../../components/Buttons/ButtonCard";
import Timeline from "../../../components/Timeline";
import CancelObjCreationButton from "../../../components/IconButtons/CancelObjCreationButton";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ObjectiveSummaryScreen = ({ route, navigation }: Props) => {
  const { objectiveTitle, type, description, subObjectives, finalDeadline } =
    route.params;

  const createObjective = () => {
    // Create record in Google firebase
    // Go to final page - display loading icon until done, then replace it with green checkmark
    db.collection("objectives")
      .add({
        userId: auth?.currentUser?.uid,
        objectiveTitle: objectiveTitle,
        type: type,
        description: description,
        subObjectives: subObjectives,
        finalDeadline: finalDeadline,
        isCompleted: false,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        navigation.navigate("CreationSuccessScreen");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  // Customize tag to display - solo or accountability
  // Due to the inflexibility for tailwind-rn to do 'w-auto inline-block' to adjust View size according to word length
  let tag;
  if (type === "accountability") {
    tag = (
      <View style={tailwind("bg-red-200 rounded px-2 py-1 w-36 mb-1 mt-1")}>
        <Text
          style={tailwind(
            "font-lato-regular text-base text-red-700 capitalize"
          )}
        >
          {type}
        </Text>
      </View>
    );
  } else {
    tag = (
      <View style={tailwind("bg-red-200 rounded px-2 pt-0.5 w-14 mt-1")}>
        <Text
          style={tailwind(
            "font-lato-regular text-base text-red-700 capitalize"
          )}
        >
          {type}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={tailwind("font-lato-black text-3xl text-white mb-6")}>
        Summary
      </Text>
      <Card style={styles.card}>
        <Card.Content>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={tailwind("font-lato-bold text-2xl")}>
              Run 5km in the ST Virtual Run 2021
            </Text>
          </View>
          <Text style={tailwind("font-lato-regular text-lg text-gray-500")}>
            Ending on {finalDeadline}
          </Text>
          {tag}
          {/* Displays content only if mode is 'accountability'  */}
          <Text style={tailwind("font-lato-regular text-base leading-5 my-4")}>
            Description:{"\n"}
            {description}
          </Text>

          {/* Display sub-objectives in timeline format */}
          <View style={styles.timelineContainer}>
            <Timeline
              data={subObjectives}
              objectiveTitle={objectiveTitle}
              finalDeadline={finalDeadline}
            />
          </View>
        </Card.Content>
      </Card>

      {/* 2 buttons - Go back and Create Objective */}
      <View style={styles.buttonContainer}>
        <ButtonCard
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}
        >
          Go back
        </ButtonCard>
        <ButtonCard style={styles.createButton} onPress={createObjective}>
          Create objective 🙌
        </ButtonCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 50,
    alignItems: "center",
    paddingVertical: windowHeight * 0.12,
  },
  card: {
    width: windowWidth * 0.8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: windowHeight * 0.03,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  goBackButton: {
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.018,
    marginRight: windowWidth * 0.07,
  },
  createButton: {
    paddingHorizontal: windowWidth * 0.05,
  },
  timelineContainer: {
    marginBottom: windowHeight * 0.02,
  },
});

export default ObjectiveSummaryScreen;
