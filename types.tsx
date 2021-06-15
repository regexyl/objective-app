/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

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

export type HomeParamList = {
  HomeScreen: undefined;
  ObjectiveMainScreen: undefined;
  Objective1Screen: undefined;
  Objective2Screen: undefined;
  Objective3Screen: undefined;
  Objective4Screen: undefined;
  CreationSuccessScreen: undefined;
  ObjectiveSummaryScreen: undefined;
  ObjectiveDetailScreen: undefined;
  ChatScreen: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
  EditProfileScreen: undefined;
  SettingsScreen: undefined;
};

export type AuthParamList = {
  LoginScreen: undefined;
  RegistrationScreen: undefined;
};
