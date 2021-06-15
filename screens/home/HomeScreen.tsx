import React, { useRef } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper"; // temporary
import { SharedElement } from "react-navigation-shared-element";
import { tailwind } from "tailwind";
import LottieView from "lottie-react-native";
import * as Animatable from "react-native-animatable";

import { db, auth } from "../../src/firebase/config";
import { windowHeight, windowWidth } from "../../src/local/config";
import ButtonGradient from "../../components/Buttons/ButtonGradient";
import Colors from "../../constants/Colors";
import SwitchButton from "../../components/Buttons/SwitchButton";
import ButtonCard from "../../components/Buttons/ButtonCard";
import TextDefault from "../../components/Text/TextDefault";
import TextBold from "../../components/Text/TextBold";
import TextBlack from "../../components/Text/TextBlack";
import ObjectiveSummaryCard from "../../components/Cards/ObjectiveSummaryCard";

const HomeScreen = ({ navigation }: Props) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [test, setTest] = React.useState("");
  const MountainAnimationRef = useRef(null);

  const onToggleSwitch = async () => {
    await setIsSwitchOn(!isSwitchOn);
    if (MountainAnimationRef.current !== null) {
      // Starts Lottie file animation from frame 52 to end frame 190
      MountainAnimationRef.current.play(52, 190);
    }
  };

  function getNumOfCompletedObj() {
    let numOfCompletedObj = "0";
    db.collection("objectives")
      .where("uid", "==", auth?.currentUser?.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data = doc.data();
          console.log(doc.id, " => ", data);
          if (data.isCompleted === true) {
            numOfCompletedObj += 1;
          }
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    return numOfCompletedObj;
  }

  const user = auth.currentUser;
  const objectivesRef = db.collection("objectives");

  const changeTest = (testText: any) => {
    console.log("testText: ", testText);
    setTest(testText);
  };

  const addToFirebase = () => {
    console.log("adding to firebase");
    objectivesRef.doc(user.uid).set({
      testing: test,
    });
  };

  const tempFunction = () => {
    console.log("testing chat screen");
    navigation.navigate("ChatScreen");
  };

  const placeholder = (
    <View style={styles.screenContent}>
      <View style={styles.placeholder}>
        <Image
          style={styles.placeholderImage}
          source={require("../../assets/images/objective-mountain-transparent.png")}
        />
        <TextDefault style={styles.placeholderText}>
          Add an objective!
        </TextDefault>
      </View>
    </View>
  );

  const objectiveList = (
    <View style={styles.screenContent}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ObjectiveDetailScreen", { test: "test" })
        }
      >
        {/* sub in item via map later */}
        <SharedElement id="1">
          <ObjectiveSummaryCard />
          <View style={styles.greenComment}>
            <View
              style={tailwind("bg-green-200 w-full px-6 py-2 rounded-b-lg")}
            >
              <Text
                style={tailwind("font-lato-regular text-green-600 text-base")}
              >
                There's 3 more days left. You can do it! 💪
              </Text>
            </View>
          </View>
        </SharedElement>
      </TouchableOpacity>
    </View>
  );

  const addNewGoalButton = (
    <View style={styles.screenContent}>
      <View style={styles.addNewGoalContentContainer}>
        <Text
          style={tailwind(
            "font-lato-bold text-xl text-gray-500 mb-3 text-center"
          )}
        >
          You have completed {getNumOfCompletedObj} objectives.
        </Text>
        <Text style={tailwind("font-lato-bold text-4xl mb-8 text-center")}>
          Ready to take on {"\n"}a new one?
        </Text>
        <ButtonCard onPress={() => navigation.navigate("Objective1Screen")}>
          + Add an objective
        </ButtonCard>
      </View>
      <Animatable.View animation="slideInUp" style={{ height: 10 }}>
        <LottieView
          source={require("../../assets/animations/mountains.json")}
          speed={3}
          loop={false}
          autoPlay
          style={styles.animatedMountain}
          ref={MountainAnimationRef}
        />
      </Animatable.View>
    </View>
  );

  const content = isSwitchOn ? addNewGoalButton : objectiveList; // temporarily changed to objectiveList from placeholder

  return (
    <View style={{ ...styles.screen }}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/images/objective-logo-word.png")}
          style={styles.logo}
        />
        <View style={styles.switchButton}>
          <SwitchButton value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  screenContent: {
    alignItems: "center",
    paddingTop: 10,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    height: windowHeight * 0.14,
  },
  logo: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.1,
    paddingTop: windowHeight * 0.2,
    resizeMode: "contain",
  },
  switchButton: {
    marginTop: 70,
    marginRight: 30,
    alignItems: "flex-end",
    zIndex: 2,
  },
  header: {
    fontSize: 26,
  },
  placeholder: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "10%",
  },
  placeholderImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 150,
    opacity: 0.5,
  },
  placeholderText: {
    fontSize: 24,
    opacity: 0.5,
  },
  addButton: {
    width: 200,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    padding: 40,
  },
  addButtonText: {
    textAlign: "center",
    fontSize: 26,
    marginTop: 18,
    color: Colors.whitishGray,
  },
  temporary: {
    height: 50,
    width: 300,
  },
  greenComment: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  animatedMountain: {
    width: windowWidth * 2,
    marginBottom: 100,
    bottom: -59,
    left: -10,
  },
  addNewGoalContentContainer: {
    position: "absolute",
    // flex: 1,
    width: windowWidth * 0.7,
    marginTop: windowHeight * 0.16,
    justifyContent: "center",
    zIndex: 1,
  },
});

export default HomeScreen;
