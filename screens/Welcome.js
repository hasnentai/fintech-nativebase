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
  Spinner,
  useColorMode,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { NativeBaseHackButton } from '../components/Buttons';

const Welcome = ({ navigation }) => {
  let { colorMode } = useColorMode();
  const [formState, setFormState] = React.useState({
    Email: '',
    password: '',
    error: null,
  });

  return (
    <Center
      w="100%"
      flex={1}
      bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.900'}
    >
      <Spinner />
    </Center>
  );
};

export default Welcome;
