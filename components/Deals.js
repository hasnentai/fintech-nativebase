import {
  Box,
  Center,
  Container,
  Heading,
  VStack,
  useColorMode,
  HStack,
  Stack,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Input,
  Flex,
  Icon,
  ScrollView,
} from 'native-base';
import { NativeBaseHackButtonGroup } from './Buttons';
import Card from './Card';
import NativeBaseHackSelect from './DropDown';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { NavBar } from './NavBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from './AppBar';
import { Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllCards } from '../api/getCardsInfo';
import Footer from './Footer';

const Deals = ({ navigation }) => {
  let { colorMode } = useColorMode();
  let card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    let x = await getAllCards();

    if (x.status === 'success') {
      setCards(x.data);
    } else {
      alert(x.message);
    }
  }, []);

  return (
    <Box
      // safeAreaTop
      width={'100%'}
      bg={colorMode === 'light' ? 'primary.300' : 'blueGray.900'}
    >
      {Platform.OS === 'web' ? <NavBar /> : <AppBar />}
      <ScrollView _contentContainerStyle={{}}>
        {/* <NavBar /> */}
        <Box
          bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.900'}
          w="100%"
          justifyContent="center"
          alignItems={'center'}
        >
          <Container minW={'95%'} justifyContent="center">
            <Box>
              <Box marginLeft={{ md: 130, base: 0 }}>
                <VStack marginTop={10}>
                  <Heading>Grab Live Deals</Heading>
                  <Heading fontSize={'sm'}>
                    Invest into leading projects and get a great returns
                  </Heading>
                </VStack>
              </Box>

              <Box w={'100%'}>
                <HStack
                  w="100%"
                  flexDir={'row'}
                  justifyContent="flex-start"
                  py={1}
                >
                  <Box flex={2}>
                    <Box w={'100%'} alignItems={'center'}>
                      <HStack
                        width={{ md: '80%' }}
                        flexDir={'row'}
                        justifyContent="flex-start"
                        py={10}
                      >
                        <Box flex={2}>
                          <InputGroup w={'100%'}>
                            <Input
                              w={{ md: '95%', base: '80%' }}
                              placeholder="Search for Deals"
                            />
                            <InputRightAddon
                              children={
                                <Icon as={Ionicons} name="search" size={5} />
                              }
                            />
                          </InputGroup>
                        </Box>
                        <Box flex={1} w="100%">
                          <NativeBaseHackSelect />
                        </Box>
                      </HStack>
                      <Center>
                        <NativeBaseHackButtonGroup
                          label={['All', 'Public', 'Private']}
                        />
                      </Center>
                      <HStack
                        width={{ md: '80%' }}
                        justifyContent="space-between"
                        flexWrap={'wrap'}
                      >
                        {cards.map((e, i) => {
                          return (
                            <Card navigation={navigation} key={i} data={e} />
                          );
                        })}
                      </HStack>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Container>
        </Box>
        <Footer />
      </ScrollView>
    </Box>
  );
};

export default Deals;
