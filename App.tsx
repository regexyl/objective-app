import React, { ReactNode } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import Colors from "./constants/Colors";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...Colors,
  },
};

const App: () => ReactNode = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-black": require("./assets/fonts/Lato-Black.ttf"),
  });

  if (!isLoadingComplete || !loaded) {
    return null;
  } else {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
};

export default App;
