import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Box,
  Text,
  HStack,
  Container,
  Flex,
  useColorMode,
  Switch,
} from 'native-base';
import { NativeBaseHackButton } from './Buttons';

//icons
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native/';

export function NavBar() {
  let { colorMode, toggleColorMode } = useColorMode();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  let menuList = ['Home', 'About Us', 'Contact', 'Hire Me'];

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      console.log('##########################');
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <Box
      width={'100%'}
      bg={colorMode === 'light' ? 'primary.300' : 'blueGray.900'}
      py={5}
      px={4}
      borderBottomWidth="1"
      borderBottomColor={colorMode === 'light' ? 'gray.300' : 'gray.700'}
    >
      {navBarWrapper()}
    </Box>
  );

  function navBarWrapper() {
    return (
      <Box>
        <Flex alignItems={'center'}>
          <Container width={'100%'}>
            <HStack width={'100%'} alignItems="center">
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
      <Text color={'white'} fontSize="4xl" fontWeight="bold">
        Investify
      </Text>
    );
  }

  function navbarMenuList() {
    return (
      <Box ml={'auto'}>
        <HStack alignItems={'center'}>
          {menuList.map((d, i) => mapNavBarMenuList(i, d))}
          {changeTheme()}
        </HStack>
      </Box>
    );
  }

  function changeTheme() {
    return (
      <HStack alignItems={'center'} marginLeft={20}>
        <FontAwesome
          name="moon-o"
          size={20}
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
        <Feather name="sun" size={20} color="#ffff" style={{ marginLeft: 5 }} />
        {isLoggedIn && (
          <Box marginLeft={10}>
            <NativeBaseHackButton
              onPress={() => {
                firebase.auth().signOut();
              }}
              width={'100%'}
              label={'Logout'}
              mt="2"
              colorScheme="indigo"
            ></NativeBaseHackButton>
          </Box>
        )}
      </HStack>
    );
  }

  function mapNavBarMenuList(i, d) {
    return (
      <Text key={i} color={'white'} px="10px" fontSize={'md'}>
        {d}
      </Text>
    );
  }
}
