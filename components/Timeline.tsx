import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { tailwind } from "tailwind";
import Svg, { Line } from "react-native-svg";

import Colors from "../constants/Colors";
import { windowHeight, windowWidth } from "../src/local/config";

const Timeline = (props: Props) => {
  const data = props.data;
  const objectiveTitle = props.objectiveTitle;
  const finalDeadline = props.finalDeadline;

  const [checkLayout, setCheckLayout] = useState(false);
  const [timelineLayoutHeight, setTimelineLayoutHeight] = useState(0);

  // Draw timeline line (i.e. the bar that links the circles together)
  let timelineLine;
  if (checkLayout) {
    timelineLine = (
      <View style={styles.timelineLine}>
        <Svg height={timelineLayoutHeight} width={10}>
          <Line
            x1="0"
            y1="0"
            x2="0"
            y2={timelineLayoutHeight}
            stroke="black"
            strokeWidth="4"
          />
        </Svg>
      </View>
    );
  }

  return (
    <View>
      <View
        //   Get height of timeline line based on size of timeline container
        onLayout={(event) => {
          if (checkLayout === false) {
            const { height } = event.nativeEvent.layout;
            console.log("height: ", height);
            timelineHeight = height - windowHeight * 0.05; // timelineHeight = height of curr component - a bit of extra length at the end
            console.log("timelineLayoutHeight: ", timelineHeight);
            setCheckLayout(true);
            setTimelineLayoutHeight(timelineHeight);
          }
        }}
      >
        {/* Renders all sub-objectives */}
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          scrollEnabled={false}
          renderItem={(itemData) => (
            <View style={styles.newRow}>
              <View style={styles.objectiveContainer}>
                <View style={styles.whiteCircle} />
                <Text
                  style={tailwind(
                    "font-lato-regular text-lg ml-3 leading-6 pr-5"
                  )}
                >
                  {itemData.item.subTitle}
                </Text>
              </View>
              <Text
                style={tailwind(
                  "font-lato-regular text-base text-gray-500 ml-8"
                )}
              >
                By {itemData.item.subDeadline}
              </Text>
            </View>
          )}
        />

        {/* Renders last row - final objective */}
        <View style={styles.newRow}>
          <View style={styles.objectiveContainer}>
            <View style={styles.blueCircle} />
            <Text
              style={tailwind("font-lato-regular text-lg ml-3 leading-6 pr-5")}
            >
              {objectiveTitle}
            </Text>
          </View>
          <Text
            style={tailwind("font-lato-regular text-base text-gray-500 ml-8")}
          >
            By {finalDeadline}
          </Text>
        </View>
      </View>

      {timelineLine}
    </View>
  );
};

const styles = StyleSheet.create({
  newRow: {
    marginTop: 10,
  },
  whiteCircle: {
    width: windowWidth / 22,
    height: windowWidth / 22,
    borderRadius: windowWidth / 2,
    backgroundColor: Colors.snowWhite,
    borderColor: Colors.accent,
    borderWidth: 3,
    marginTop: 4,
  },
  blueCircle: {
    width: windowWidth / 22,
    height: windowWidth / 22,
    borderRadius: windowWidth / 2,
    backgroundColor: Colors.primary,
    borderColor: Colors.accent,
    borderWidth: 3,
    marginTop: 4,
  },
  objectiveContainer: {
    flexDirection: "row",
  },
  objectiveText: {
    marginLeft: 14,
    width: windowWidth * 0.5,
    paddingRight: 10,
  },
  timelineLine: {
    position: "absolute",
    top: windowHeight * 0.02,
    left: windowWidth * 0.02,
    zIndex: -1,
  },
});

export default Timeline;
