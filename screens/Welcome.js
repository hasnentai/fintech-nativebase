import * as React from 'react';
import { Center, Spinner, useColorMode } from 'native-base';

const Welcome = ({}) => {
  let { colorMode } = useColorMode();

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
