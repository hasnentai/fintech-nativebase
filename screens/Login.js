import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  Icon,
  NativeBaseProvider,
  Divider,
  useColorMode,
  Spinner,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { NativeBaseHackButton } from '../components/Buttons';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Platform } from 'react-native';
import AppBar from '../components/AppBar';
import { NavBar } from '../components/NavBar';

const Login = ({ navigation }) => {
  let { colorMode } = useColorMode();
  const [formState, setFormState] = React.useState({
    Email: '',
    password: '',
    error: null,
  });
  const [loading, setLoading] = React.useState(false);

  const LoginFunction = () => {
    if (formState.Email && formState.password) {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(formState.Email, formState.password)
        .then(() => {
          console.log('usercreated');

          navigation.replace('Home');
          setLoading(false);
        })
        .catch((error) => {
          alert(error.message);
          setLoading(false);

          // ..
        });
    } else {
      alert('Please enter email and passwrd!');
    }
  };
  console.log(formState);
  return (
    <>
      {Platform.OS === 'web' ? <NavBar /> : <AppBar />}
      <Center
        w="100%"
        flex={1}
        bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.900'}
      >
        <Box safeArea p="2" py="8" w="95%" maxW={500}>
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
          >
            Login
          </Heading>
          <Box style={{ backgroundColor: 'red.100' }}>
            <Heading
              mt="1"
              _dark={{
                color: 'warmGray.200',
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              Login to continue
            </Heading>
          </Box>

          <VStack space={2} mt="5">
            <Button
              colorScheme="indigo"
              leftIcon={<Icon as={AntDesign} name="google" size="sm" />}
            >
              Login with Google
            </Button>
            <Box
              marginTop={'20px'}
              marginBottom={'20px'}
              alignItems={'center'}
              justifyContent={'center'}
              style={{ position: 'relative' }}
            >
              <Divider />
              <Heading
                bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.900'}
                style={{
                  position: 'absolute',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
                mt="1"
                _dark={{
                  color: 'warmGray.200',
                }}
                color="coolGray.600"
                fontWeight="medium"
                size="xs"
              >
                Or Sign in to continue
              </Heading>
            </Box>

            <FormControl>
              <Input
                width={'100%'}
                placeholder="Email"
                onChangeText={(e) =>
                  setFormState((formState) => ({
                    ...formState,
                    Email: e,
                  }))
                }
              />
              <Input
                marginTop={3}
                width={'100%'}
                type={'password'}
                placeholder="Password"
                onChangeText={(e) =>
                  setFormState((formState) => ({
                    ...formState,
                    password: e,
                  }))
                }
              />
            </FormControl>
            <Box style={{ marginTop: 10 }}>
              <NativeBaseHackButton
                width={'100%'}
                label={'Login'}
                isLoading={loading}
                onPress={LoginFunction}
                mt="2"
                colorScheme="indigo"
              ></NativeBaseHackButton>
            </Box>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                Don't have an account?
              </Text>
              <Link
                onPress={() => navigation.replace('Sign Up')}
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                href="#"
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default Login;
