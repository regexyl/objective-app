import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { tailwind } from "tailwind";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { SvgUri } from "react-native-svg";
import sha256 from "crypto-js/sha256";
import { auth } from "../../src/firebase/config";

import { windowHeight, windowWidth } from "../../src/local/config";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ObjectiveSummaryCard = (props: any) => {
  const getUri = (seed: string) => {
    const hash: string = sha256(seed);
    // retrieve DiceBear Avatars from API at https://avatars.dicebear.com/docs/http-api
    // White background: 23ffffff, Radius = 50 for circular image
    const uri: string = `https://avatars.dicebear.com/api/jdenticon/${hash}.svg?background=%23ffffff&radius=50&width=2&height=2`;
    return uri;
  };

  return (
    <View style={styles.card}>
      <View
        style={tailwind(
          "bg-white w-full px-5 pt-4 pb-3.5 rounded-lg items-center"
        )}
      >
        <View>
          <View style={styles.endDateContainer}>
            <Text
              style={tailwind("font-lato-bold text-gray-500 text-sm uppercase")}
            >
              Ends on 17 Jun 2021
            </Text>
          </View>
          <Text style={tailwind("font-lato-bold text-xl leading-7")}>
            Achieve a GPA of 3.5 for Year 2 Sem 2
          </Text>
          {/* Accountability partner card */}
          {/* <View style={styles.partnerCard}>
            <View style={tailwind("bg-blue-500 w-full p-3 rounded-lg")}>
              <View style={styles.partnerCardContent}>
                <View style={{ width: "85%" }}>
                  <Text
                    style={tailwind("font-lato-regular text-white text-sm")}
                  >
                    Your partner @ajowax has completed 40% of the
                    sub-objectives!
                  </Text>
                </View>
                <View
                  style={{
                    width: "15%",
                    alignItems: "center",
                    paddingLeft: "0.2%",
                    paddingTop: "2%",
                  }}
                >
                  <SvgUri
                    width="86%"
                    height="86%"
                    uri={getUri(auth?.currentUser?.email)} // temporarily put user's own dp here --> need to switch to partner's
                  />
                </View>
              </View>
            </View>
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.83,
    height: windowHeight * 0.12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  partnerCard: {
    paddingTop: windowWidth * 0.02,
    width: windowWidth * 0.7,
    height: windowHeight * 0.09,
  },
  partnerIcon: {
    paddingTop: windowWidth * 0.02,
    width: windowWidth * 0.5,
  },
  title: {
    fontSize: 20,
  },
  endDateContainer: {
    paddingBottom: 4,
  },
  endDateText: {
    fontSize: 14,
  },
  partnerText: {
    fontSize: 15,
    color: "white",
  },
  partnerCardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ObjectiveSummaryCard;
