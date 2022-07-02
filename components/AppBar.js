import React from 'react';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  useColorMode,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeBaseHackButton } from './Buttons';

function AppBar() {
  let { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={colorMode === 'light' ? 'primary.600' : 'blueGray.900'}
        safeAreaTop
      >
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
            <Text color="white" fontSize="20" fontWeight="bold">
              Logo of the app
            </Text>
          </HStack>
          <HStack>
            <NativeBaseHackButton
              label="Theme"
              onPress={toggleColorMode}
              bg={colorMode === 'light' ? 'primary.700' : 'primary.600'}
            />
          </HStack>
        </HStack>
      </Box>
    </>
  );
}

export default AppBar;
