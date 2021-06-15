import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { windowHeight, windowWidth } from "../../src/local/config";

// This close button goes back to the home screen
const CancelObjCreationButton = () => {
  const navigation = useNavigation();
  console.log("navigation, ", navigation);
  const buttonRef = React.useRef();

  const closeModalAlert = () =>
    Alert.alert(
      "Do you want to discard this objective?",
      "All changes made will be lost.",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            buttonRef.current.fadeOut(100).then(() => {
              navigation.navigate("HomeScreen");
            });
          },
        },
      ]
    );

  return (
    // Close button with wrapper in <Animatable.View> to delay animation
    <Animatable.View
      ref={buttonRef}
      animation="fadeIn"
      duration={600}
      delay={300}
      style={[StyleSheet.absoluteFillObject]}
    >
      <MaterialCommunityIcons
        name="close"
        size={28}
        color="#fff"
        style={styles.cancel}
        onPress={closeModalAlert}
      />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  cancel: {
    position: "absolute",
    top: windowHeight * 0.05,
    right: windowWidth * 0.05,
    zIndex: 2,
  },
});

export default CancelObjCreationButton;
