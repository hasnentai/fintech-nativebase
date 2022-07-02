import React from "react";
import { Box, Text, HStack, Container, Flex, useColorMode } from "native-base";
import { NativeBaseHackButton } from "./Buttons";

export function NavBar() {
  let { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  let menuList = ["Home", "About Us", "Contact", "Hire Me"];
  return (
    <Box
      safeAreaTop
      width={"100vw"}
      bg={colorMode === "light" ? "primary.300" : "blueGray.900"}
      py={5}
      px={4}
      borderBottomWidth="1"
      borderBottomColor={colorMode === "light" ? "gray.300" : "gray.700"}
    >
      {navBarWrapper()}
    </Box>
  );

  function navBarWrapper() {
    return (
      <Box>
        <Flex alignItems={"center"}>
          <Container width={"100%"}>
            <HStack width={"100%"} alignItems="center">
              {navBarBrand()}
              {navbarMenuList()}
            </HStack>
          </Container>
        </Flex>
      </Box>
    );
  }

  function navBarBrand() {
    return (
      <Text color={"white"} fontSize="lg" fontWeight="bold">
        Logo Of App
      </Text>
    );
  }

  function navbarMenuList() {
    return (
      <Box ml={"auto"}>
        <HStack alignItems={"center"}>
          {menuList.map((d, i) => mapNavBarMenuList(i, d))}
          {changeTheme()}
        </HStack>
      </Box>
    );
  }

  function changeTheme() {
    return (
      <NativeBaseHackButton
        label="Log In"
        onPress={toggleColorMode}
        bg={colorMode === "light" ? "primary.700" : "primary.600"}
      />
    );
  }

  function mapNavBarMenuList(i, d) {
    return (
      <Text key={i} color={"white"} px="10px" fontSize={"md"}>
        {d}
      </Text>
    );
  }
}
