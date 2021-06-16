import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { tailwind } from "tailwind";
import LottieView from "lottie-react-native";

import { windowWidth } from "../../../src/local/config";
import Colors from "../../../constants/Colors";
import ButtonCard from "../../../components/Buttons/ButtonCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeNavProps, HomeParamList } from "types";

export interface CreactionSuccessScreenProps {
  navigation: StackNavigationProp<HomeParamList, "CreationSuccessScreen">;
}

const CreationSuccessScreen: React.FC<CreactionSuccessScreenProps> = ({
  navigation,
}: HomeNavProps<"CreationSuccessScreen">) => {
  // Prevent user from returning to previous objective summary page by swiping right
  // Current method isn't the best as user can still see a glimpse of previous page when swiping
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
      }),
    [navigation]
  );

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <LottieView
          source={require("../../../assets/animations/tick.json")}
          loop={false}
          autoPlay
          style={styles.animatedTick}
        />
        <Text style={tailwind("font-lato-bold text-3xl mt-6 mb-4")}>
          Objective created!
        </Text>
        <Text
          style={tailwind(
            "font-lato-regular text-lg text-center leading-6 mb-12"
          )}
        >
          Get notifications for reminders to work towards your objective.
        </Text>
        <ButtonCard onPress={() => navigation.navigate("HomeScreen")}>
          Return to home
        </ButtonCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.snowWhite,
    paddingTop: 220,
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    width: 350,
  },
  headerText: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  subHeaderText: {
    marginVertical: 10,
    fontSize: 17,
    color: "black",
    textAlign: "center",
  },
  animatedTick: {
    width: windowWidth * 0.33,
  },
});

export default CreationSuccessScreen;
