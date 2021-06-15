import React from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { windowHeight, windowWidth } from "../../src/local/config";

// This close button goes back to the home screen
const CloseIconButton = (props: Props) => {
  const navigation = useNavigation();
  console.log("navigation, ", navigation);
  const buttonRef = React.useRef();

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
        onPress={props.onPress}
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

export default CloseIconButton;
