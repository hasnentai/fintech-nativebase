import {
  Box,
  Center,
  Container,
  Heading,
  ScrollView,
  useColorMode,
} from 'native-base';
import { Platform } from 'react-native';
import AppBar from './AppBar';
import { NativeBaseHackButton } from './Buttons';
import Card from './Card';
import { NavBar } from './NavBar';

const LandingPage = ({ navigation }) => {
  let { colorMode } = useColorMode();
  return (
    <Box
      // safeAreaTop
      width={'100%'}
      bg={colorMode === 'light' ? 'primary.100' : 'blueGray.900'}
    >
      {Platform.OS === 'web' ? <NavBar /> : <AppBar />}
      <ScrollView _contentContainerStyle={{}}>
        <Center>
          <Container width={'100%'}>
            <Box
              flexDir={{ md: 'row', base: 'column' }}
              minH={'800'}
              width={'100%'}
            >
              <Box
                flex={1}
                justifyContent={{ md: 'center' }}
                marginTop={{ base: 10 }}
              >
                <Heading
                  fontSize={'6xl'}
                  justifyContent={'center'}
                  color={'white'}
                  fontWeight={'light'}
                >
                  Super Charge Your Investing Skills
                </Heading>
                <Heading fontSize={'lg'} color={'white'}>
                  Invest on our platform for leading company and projects.Buy
                  Stocks and invest now and get high returns
                </Heading>
                <Box
                  pt="30"
                  justifyContent={'flex-start'}
                  alignItems="flex-start"
                >
                  <NativeBaseHackButton
                    onPress={() => navigation.push('Login')}
                    label={'Start Investing Now'}
                  />
                </Box>
              </Box>
              {Platform.OS === 'web' ? (
                <Box flex={1} alignItems="center">
                  <Card />
                </Box>
              ) : null}
            </Box>
          </Container>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default LandingPage;
