import firebase from 'firebase/app';
import 'firebase/auth';

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
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { NativeBaseHackButton } from '../components/Buttons';
import { Platform } from 'react-native';
import AppBar from '../components/AppBar';
import { NavBar } from '../components/NavBar';

const SignUp = ({ navigation }) => {
  let { colorMode } = useColorMode();
  const [formState, setFormState] = React.useState({
    FirstName: '',
    SecondName: '',
    Email: '',
    password: '',
    error: null,
  });
  const [loading, setLoading] = React.useState(false);
  const SignUpFunction = () => {
    if (formState.Email && formState.password) {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formState.Email, formState.password)
        .then(() => {
          console.log('usercreated');
          setLoading(false);
          navigation.replace('Home');
        })
        .catch((error) => {
          setLoading(false);
          alert(error.message);

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
            Get Started
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
              Or Sign Up to continue!
            </Heading>
          </Box>

          <VStack space={2} mt="5">
            <Button
              colorScheme="indigo"
              leftIcon={<Icon as={AntDesign} name="google" size="sm" />}
            >
              Sign up with Google
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
                Sign in to continue
              </Heading>
            </Box>
            <FormControl>
              <HStack justifyContent={'space-between'}>
                <Input
                  width={'48%'}
                  placeholder="First name"
                  onChangeText={(e) =>
                    setFormState((formState) => ({
                      ...formState,
                      FirstName: e,
                    }))
                  }
                />
                <Input
                  width={'48%'}
                  placeholder="Second name"
                  onChangeText={(e) =>
                    setFormState((formState) => ({
                      ...formState,
                      SecondName: e,
                    }))
                  }
                />
              </HStack>
            </FormControl>
            <FormControl>
              <Input
                marginTop={3}
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
                placeholder="Password"
                type={'password'}
                onChangeText={(e) =>
                  setFormState((formState) => ({
                    ...formState,
                    password: e,
                  }))
                }
              />
            </FormControl>
            <NativeBaseHackButton
              width={'100%'}
              label={'SignUp'}
              onPress={SignUpFunction}
              isLoading={loading}
              mt="2"
              colorScheme="indigo"
            ></NativeBaseHackButton>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                Already have an account?
              </Text>
              <Link
                onPress={() => navigation.replace('Login')}
                _text={{
                  color: 'indigo.500',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                href="#"
              >
                Login in here
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default SignUp;
