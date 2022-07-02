// import React, { useState } from 'react'
// import { Text, View, StyleSheet } from "react-native"
// import TextBox from "../components/TextBox"
// import Btn from "../components/Btn"
// import firebase from 'firebase/app';
// import "firebase/auth";

// const styles = StyleSheet.create({
//     view: {
//         flex: 1,
//         width: "100%",
//         justifyContent: "center",
//         alignItems: "center"
//     }
// })

// export default function SignUpScreen({ navigation }) {

//     const [values, setValues] = useState({
//         email: "",
//         pwd: "",
//         pwd2: ""
//     })

//     function handleChange(text, eventName) {
//         setValues(prev => {
//             return {
//                 ...prev,
//                 [eventName]: text
//             }
//         })
//     }

//     function SignUp() {

//         const { email, pwd, pwd2 } = values

//         if (pwd == pwd2) {
//             firebase.auth().createUserWithEmailAndPassword(email, pwd)
//                 .then(() => {
//                 })
//                 .catch((error) => {
//                     alert(error.message)
//                     // ..
//                 });
//         } else {
//             alert("Passwords are different!")
//         }
//     }

//     return <View style={styles.view}>
//         <Text style={{ fontSize: 34, fontWeight: "800", marginBottom: 20 }}>Sign Up</Text>
//         <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} />
//         <TextBox placeholder="Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd")}/>
//         <TextBox placeholder="Confirme Password" secureTextEntry={true}  onChangeText={text => handleChange(text, "pwd2")}/>
//         <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "92%", }}>
//             <Btn onClick={() => SignUp()} title="Sign Up" style={{ width: "48%" }} />
//             <Btn onClick={() => navigation.replace("Login")} title="Login" style={{ width: "48%", backgroundColor: "#344869" }} />
//         </View>
//     </View>
// }

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
  NativeBaseProvider,
} from 'native-base';

const SignUp = () => {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <HStack>
              <Input
                width={'50%'}
                shadow={2}
                _light={{
                  bg: 'coolGray.100',
                }}
                _dark={{
                  bg: 'coolGray.800',
                }}
                placeholder="First name"
              />
              <Input
                width={'50%'}
                shadow={2}
                _light={{
                  bg: 'coolGray.100',
                }}
                _dark={{
                  bg: 'coolGray.800',
                }}
                placeholder="Second name"
              />
            </HStack>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>

            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
            >
              I'm a new user.{' '}
            </Text>
            <Link
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
  );
};

export default SignUp;
