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
<<<<<<< HEAD
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeBaseHackButton } from "./Buttons";
=======
  Switch,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeBaseHackButton } from './Buttons';
>>>>>>> 37c20ad748248d944983aa73f795df07605c70a2

//icons
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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
<<<<<<< HEAD
        <Box bg={colorMode === "light" ? "primary.600" : "blueGray.900"} />
        {AppBarHStack()}
=======
        <Box bg={colorMode === 'light' ? 'primary.600' : 'blueGray.900'} />
        <HStack
          bg={colorMode === 'light' ? 'primary.600' : 'blueGray.900'}
          px="5"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          borderBottomWidth="1"
          borderBottomColor={colorMode === 'light' ? 'gray.300' : 'gray.700'}
        >
          <HStack alignItems="center">
            <Text color={'white'} fontSize="3xl" fontWeight="bold">
              Investify
            </Text>
          </HStack>
          <HStack alignItems={'center'}>
            <FontAwesome
              name="moon-o"
              size={15}
              color="#ffff"
              style={{ marginRight: 5 }}
            />
            <Switch
              isChecked={colorMode === 'light'}
              onToggle={toggleColorMode}
              aria-label={
                colorMode === 'light'
                  ? 'switch to dark mode'
                  : 'switch to light mode'
              }
            />
            <Feather
              name="sun"
              size={15}
              color="#ffff"
              style={{ marginLeft: 5 }}
            />
          </HStack>
        </HStack>
>>>>>>> 37c20ad748248d944983aa73f795df07605c70a2
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
