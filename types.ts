import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SubObjective from "models/subObjective";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Activity: undefined;
  Home: undefined;
  Profile: undefined;
};

export type ActivityParamList = {
  ActivityScreen: undefined;
};

export type AuthParamList = {
  LoginScreen: undefined;
  RegistrationScreen: undefined;
};

export type HomeParamList = {
  CreationSuccessScreen: undefined;
  HomeScreen: undefined;
  ObjectiveMainScreen: undefined;
  Objective1Screen: undefined;
  Objective2Screen: {
    objectiveTitle: string;
  };
  Objective3Screen: {
    objectiveTitle: string;
    type: string;
  };
  Objective4Screen: {
    objectiveTitle: string;
    type: string;
    description: null | string;
  };
  ObjectiveSummaryScreen: {
    objectiveTitle: string;
    type: string;
    description: null | string;
    subObjectives: SubObjective[];
    finalDeadline: string;
  };
  ObjectiveDetailScreen: undefined;
  ChatScreen: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
  EditProfileScreen: undefined;
  SettingsScreen: undefined;
};

export type ActivityNavProps<T extends keyof ActivityParamList> = {
  navigation: StackNavigationProp<ActivityParamList, T>;
  route: RouteProp<ActivityParamList, T>;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
