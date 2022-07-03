import {
  Box,
  Center,
  Container,
  Heading,
  ScrollView,
  useColorMode,
} from 'native-base';
import { Platform, ImageBackground } from 'react-native';
import AppBar from './AppBar';
import { NativeBaseHackButton } from './Buttons';
import Card from './Card';
import Footer from './Footer';
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
      {/* <ImageBackground
        source={
          colorMode === 'light'
            ? 'https://img.freepik.com/free-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=900'
            : ''
        }
        resizeMode="cover"
        blurRadius={20}
      > */}
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
                  pt={2}
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
                  <Card
                    data={{
                      name: 'Satvacart',
                      type: ['health', 'ai'],
                      corporateType: 'private',
                      desc: "Satvacart is an online grocery delivery company based in Gurgaon. Set up through play books of global success stories on online grocery such as FreshDirect & Ocado, Satvacart is the only cash generating grocery model in the country. It's core focus USP is Fruits & Veggies and Imported & Gourmet food.",
                      goalAmt: '486415630',
                      raisedYet: '451645',
                      minLimit: '10000',
                      maxLimit: '100000',
                      startDate: '1655463600000',
                      endDate: '1657218540000',
                      backedBy: [
                        {
                          name: 'venture capitals',
                          type: 'investment company',
                          image: '',
                        },
                        {
                          name: 'groot capitals',
                          type: 'investment company',
                          image: '',
                        },
                      ],
                      coverImage:
                        'https://tyke-startup-bucket.s3.ap-south-1.amazonaws.com/SATVACART%20SUPERMART%20PRIVATE%20LIMITED/1519869607132.jpeg',
                    }}
                  />
                </Box>
              ) : null}
            </Box>
          </Container>
          <Footer />
        </Center>
      </ScrollView>
      {/* </ImageBackground> */}
    </Box>
  );
};

export default LandingPage;
