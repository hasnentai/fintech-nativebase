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
  Switch,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeBaseHackButton } from './Buttons';

//icons
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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
      </Box>
    </>
  );
}

export default AppBar;
