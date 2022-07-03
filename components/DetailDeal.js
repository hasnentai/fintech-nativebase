import React from 'react';
import {
  Box,
  Container,
  Heading,
  HStack,
  ScrollView,
  useColorMode,
  Image,
  VStack,
  Center,
  Progress,
  Button,
  Divider,
  Modal,
  Text,
  NativeBaseProvider,
  Input,
} from 'native-base';
import { useEffect, useState } from 'react';
import { getAllCards } from '../api/getCardsInfo';
import AppBar from './AppBar';
import { NavBar } from './NavBar';
import ModalPage from './Modal';
import { Platform } from 'react-native';

const DetailsDeal = ({ navigation }) => {
  let { colorMode } = useColorMode();
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <ScrollView _contentContainerStyle={{}}>
      {Platform.OS === 'web' ? <NavBar /> : <AppBar />}
      <Box
        bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.900'}
        w="100%"
        justifyContent="center"
        alignItems={'center'}
      >
        <Container minW={{ md: '80%', base: '100%' }} p={5}>
          <HStack space={2} w="100%">
            <Box flex={1} w="full">
              <VStack>
                <HStack alignItems={'center'} m={3}>
                  <Image
                    alt="img"
                    shadow={3}
                    borderColor={'coolGray.200'}
                    borderWidth={1}
                    borderRadius={200}
                    h="70px"
                    w="70px"
                    src="https://www.tykeinvest.com/_next/image?url=https%3A%2F%2Ftyke-startup-bucket.s3.ap-south-1.amazonaws.com%2FUNIVEST%2520COMMUNICATION%2520TECHNOLOGIES%2520PRIVATE%2520LIMITED%2FTime%2520to%2520turn%2520Sharks%2520to%2520TagZ......%2520%252822%2529.png&w=828&q=75"
                  />
                  <Heading m={2}>UniVest</Heading>
                </HStack>
                <HStack m={3} space={5} mx={5}>
                  <Box px={2} py={1} bg={'success.600'} borderRadius={200}>
                    <Heading color={'white'} fontSize={'sm'}>
                      E-Commerce{' '}
                    </Heading>
                  </Box>
                  <Box
                    px={2}
                    py={1}
                    color={'white'}
                    bg={'success.600'}
                    borderRadius={200}
                  >
                    <Heading color={'white'} fontSize={'sm'}>
                      Web
                    </Heading>
                  </Box>
                  <Box
                    px={2}
                    py={1}
                    color={'white'}
                    bg={'success.600'}
                    borderRadius={200}
                  >
                    <Heading color={'white'} fontSize={'sm'}>
                      Tech
                    </Heading>
                  </Box>
                </HStack>
                <Heading fontSize={'sm'} mx={5} my={3}>
                  Univest is a unique investments ecosystem solving the daily
                  problems of 80 mn stock market investors & earning them higher
                  returns; by letting users watch their friends' trades in real
                  time, chat about investments, see AI based recommendations on
                  portfolio & invest through any brokerage platform.
                </Heading>
                <HStack w="100%" justifyContent={'space-between'} px={5}>
                  <Box>
                    <VStack>
                      <Heading>10%</Heading>
                      <Heading fontSize={'sm'}>Raised So Far</Heading>
                    </VStack>
                  </Box>
                  <Box>
                    <VStack>
                      <Heading>21 Days </Heading>
                      <Heading fontSize={'sm'}>To Go for Funding</Heading>
                    </VStack>
                  </Box>
                </HStack>

                <Box px={5}>
                  <Progress value={45} my="4" />
                </Box>
                <Box px={5} mb={5}>
                  <Button
                    onPress={() => {
                      setModalVisible(true);
                    }}
                  >
                    Invest Now
                  </Button>
                </Box>
              </VStack>
            </Box>
            <Box
              flex={1}
              w="full"
              p={3}
              display={{ md: 'block', base: 'none' }}
            >
              <Image
                alt="img"
                shadow={3}
                borderColor={'coolGray.200'}
                borderWidth={1}
                borderRadius={5}
                h="full"
                w="full"
                src="https://www.tykeinvest.com/_next/image?url=https%3A%2F%2Ftyke-startup-bucket.s3.ap-south-1.amazonaws.com%2FUNIVEST%2520COMMUNICATION%2520TECHNOLOGIES%2520PRIVATE%2520LIMITED%2FTime%2520to%2520turn%2520Sharks%2520to%2520TagZ......%2520%252822%2529.png&w=828&q=75"
              />
            </Box>
          </HStack>
          <Divider my={{ md: 10, base: 0 }} />
          <Heading my={5}>Backed By</Heading>
          <HStack space={5}>
            <Box
              borderWidth={1}
              borderRadius={3}
              py={5}
              px={5}
              flex={1}
              borderColor={
                colorMode === 'light' ? 'coolGray.200' : 'coolGray.600'
              }
            >
              <HStack>
                <Image
                  alt="img"
                  shadow={3}
                  borderColor={'coolGray.200'}
                  borderWidth={1}
                  borderRadius={500}
                  h={45}
                  w={45}
                  src="https://www.tykeinvest.com/_next/image?url=https%3A%2F%2Ftyke-startup-bucket.s3.ap-south-1.amazonaws.com%2FUNIVEST%2520COMMUNICATION%2520TECHNOLOGIES%2520PRIVATE%2520LIMITED%2FTime%2520to%2520turn%2520Sharks%2520to%2520TagZ......%2520%252822%2529.png&w=828&q=75"
                />
                <VStack alignContent={'center'} justifyContent={'center'}>
                  <Heading px={3} fontSize={'md'}>
                    Very Good Ventures
                  </Heading>
                  <Heading px={3} fontSize={'sm'} fontWeight="light">
                    Private Investing Company
                  </Heading>
                </VStack>
              </HStack>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={3}
              py={5}
              px={5}
              flex={1}
              borderColor={
                colorMode === 'light' ? 'coolGray.200' : 'coolGray.600'
              }
            >
              <HStack>
                <Image
                  alt="img"
                  shadow={3}
                  borderColor={'coolGray.200'}
                  borderWidth={1}
                  borderRadius={500}
                  h={45}
                  w={45}
                  src="https://www.tykeinvest.com/_next/image?url=https%3A%2F%2Ftyke-startup-bucket.s3.ap-south-1.amazonaws.com%2FUNIVEST%2520COMMUNICATION%2520TECHNOLOGIES%2520PRIVATE%2520LIMITED%2FTime%2520to%2520turn%2520Sharks%2520to%2520TagZ......%2520%252822%2529.png&w=828&q=75"
                />
                <VStack alignContent={'center'} justifyContent={'center'}>
                  <Heading px={3} fontSize={'md'}>
                    Very Good Ventures
                  </Heading>
                  <Heading px={3} fontSize={'sm'} fontWeight="light">
                    Private Investing Company
                  </Heading>
                </VStack>
              </HStack>
            </Box>
          </HStack>

          <Divider my={{ md: 10, base: 0 }} />
          <Heading my={5}>AMA Round Details</Heading>
          <HStack space={2}>
            <Box
              flex={1}
              borderWidth={1}
              borderRadius={3}
              py={5}
              borderColor={
                colorMode === 'light' ? 'coolGray.200' : 'coolGray.600'
              }
            >
              <Heading mx={5} fontSize="md">
                What is AMA ?{' '}
              </Heading>
              <Heading fontSize="sm" fontWeight={'medium'} mx={5} py={5}>
                AMA (Ask Me Anything) is a 45-60 minute online zoom session for
                investors to directly interact with the startup founders and ask
                any questions that they have regarding the startup or the
                campaign.
              </Heading>
            </Box>
            <Box
              flex={1}
              borderWidth={1}
              py={5}
              borderRadius={3}
              borderColor={
                colorMode === 'light' ? 'coolGray.200' : 'coolGray.600'
              }
              display={{ md: 'block', base: 'none' }}
            >
              <VStack space={2} display={'flex'}>
                <Heading mx={5} fontSize="md">
                  When it will be live?
                </Heading>
                <Heading fontSize="sm" fontWeight={'medium'} mx={5} py={5}>
                  AMA will be live by 6-7 PM IST
                </Heading>
              </VStack>
            </Box>
          </HStack>
          <Divider my={{ md: 10, base: 0 }} />
          <Heading my={5}> FAQ's</Heading>
          <HStack space={2} display={'flex'}>
            <Box
              flex={1}
              borderWidth={1}
              borderRadius={3}
              py={5}
              borderColor={
                colorMode === 'light' ? 'coolGray.200' : 'coolGray.600'
              }
            >
              <Heading mx={5} fontSize="md">
                Min and Max Investment I can do ?
              </Heading>
              <Heading fontSize="sm" fontWeight={'medium'} mx={5} py={5}>
                You can invest up to 30% max and 10% min in this project,you can
                also use UPI,Card payments to invest in this project.Also
                investing higher and spending more time in this project will
                help you to get more return.
              </Heading>
            </Box>
            <Box
              flex={1}
              borderWidth={1}
              py={5}
              borderRadius={3}
              borderColor={
                colorMode === 'light' ? 'coolGray.200' : 'coolGray.600'
              }
            >
              <Heading mx={5} fontSize="md">
                Who is the founder of this company
              </Heading>
              <Heading fontSize="sm" fontWeight={'medium'} mx={5} py={5}>
                Mark Bruno is founder of this company. He is x-google and
                x-twitter Dev-Rel employee who played and important role to make
                an amazing projects
              </Heading>
            </Box>
          </HStack>
        </Container>
      </Box>
      {/* modal */}
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={'xl'}>
        <Modal.Content maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Invest Now in UniVest</Modal.Header>
          <Modal.Body height={400}>
            <ScrollView>
              <Image
                alt="img"
                borderTopRadius={5}
                h={'200px'}
                w={'100%'}
                borderBottomWidth={1}
                borderColor={'coolGray.200'}
                src="https://www.shareicon.net/data/2017/05/11/885935_visa_512x512.png"
              />

              <Input
                marginTop={3}
                width={'100%'}
                type={'number'}
                placeholder="Number"
              ></Input>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Buy
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </ScrollView>
  );
};

export default DetailsDeal;
