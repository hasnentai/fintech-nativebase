import React from "react";
import {
  HStack,
  Button,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  useColorMode,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeBaseHackButton } from "./Buttons";

function AppBar() {
  let { colorMode, toggleColorMode } = useColorMode();
  const AppBarWrapper = renderAppBar();
  return <>{AppBarWrapper}</>;

  /**
   *
   * @returns App Bar Box which will be used to align the elements.
   */
  function renderAppBar() {
    return (
      <Box
        bg={colorMode === "light" ? "primary.600" : "blueGray.900"}
        safeAreaTop
      >
        <Box bg={colorMode === "light" ? "primary.600" : "blueGray.900"} />
        {AppBarHStack()}
      </Box>
    );
  }

  /**
   *
   * @returns App Bar HStack which will be used to keep the navbar brand and menu items in horizontal manner
   */
  function AppBarHStack() {
    return (
      <HStack
        bg={colorMode === "light" ? "primary.600" : "blueGray.900"}
        px="5"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        borderBottomWidth="1"
        borderBottomColor={colorMode === "light" ? "gray.300" : "gray.700"}
      >
        {appBarBrand()}
        <HStack>{loginButton()}</HStack>
      </HStack>
    );
  }
  /**
   *
   * @returns App Bar Brand Name
   */
  function appBarBrand() {
    return (
      <HStack alignItems="center">
        <Text color="white" fontSize="20" fontWeight="bold">
          Investify
        </Text>
      </HStack>
    );
  }

  /**
   *
   * @returns App Bar Login Button
   */
  function loginButton() {
    return (
      <NativeBaseHackButton
        label="Theme"
        onPress={toggleColorMode}
        bg={colorMode === "light" ? "primary.700" : "primary.600"}
      />
    );
  }
}

export default AppBar;
