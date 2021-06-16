import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import * as React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  ActivityScreen,
  CreationSuccessScreen,
  Objective1Screen,
  Objective2Screen,
  Objective3Screen,
  Objective4Screen,
  ObjectiveSummaryScreen,
  ChatScreen,
  ObjectiveDetailScreen,
  HomeScreen,
  EditProfileScreen,
  ProfileScreen,
  SettingsScreen,
} from "../screens";
import {
  BottomTabParamList,
  ActivityParamList,
  HomeParamList,
  ProfileParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ showLabel: false }}
    >
      <BottomTab.Screen
        name="Activity"
        component={ActivityNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "receipt" : "receipt-outline"}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return (
    <Ionicons
      size={30}
      style={{ marginBottom: -10, marginTop: 5 }}
      {...props}
    />
  );
}

const ActivityStack = createStackNavigator<ActivityParamList>();
function ActivityNavigator() {
  return (
    <ActivityStack.Navigator screenOptions={{ headerShown: false }}>
      <ActivityStack.Screen name="ActivityScreen" component={ActivityScreen} />
    </ActivityStack.Navigator>
  );
}

const HomeStack = createSharedElementStackNavigator<HomeParamList>();
const objectiveDetailScreenOptions = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};
function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="Objective1Screen"
        component={Objective1Screen}
        options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
      />
      <HomeStack.Screen name="Objective2Screen" component={Objective2Screen} />
      <HomeStack.Screen name="Objective3Screen" component={Objective3Screen} />
      <HomeStack.Screen name="Objective4Screen" component={Objective4Screen} />
      <HomeStack.Screen
        name="CreationSuccessScreen"
        component={CreationSuccessScreen}
      />
      <HomeStack.Screen
        name="ObjectiveSummaryScreen"
        component={ObjectiveSummaryScreen}
      />
      <HomeStack.Screen
        name="ObjectiveDetailScreen"
        component={ObjectiveDetailScreen}
        options={() => objectiveDetailScreenOptions}
      />
      <HomeStack.Screen name="ChatScreen" component={ChatScreen} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
      <ProfileStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
}
