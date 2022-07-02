import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";

import Deals from "./view/Deals";
import { NavBar } from "./components/NavBar";
import { nativeBaseHackTheme } from "./theme/NativeBaseHackTheme";

// extend the theme

export default function App() {
  return (
    <NativeBaseProvider theme={nativeBaseHackTheme}>
      <VStack alignItems="center">
        <NavBar />
        <Deals />
      </VStack>
    </NativeBaseProvider>
  );
}
