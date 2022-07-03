import { Box, Center, Heading, useColorMode } from 'native-base';

const Footer = () => {
  const colorMode = useColorMode();
  return (
    <Center width={'100%'}>
      <Box
        borderWidth={1}
        borderColor={colorMode === 'light' ? 'coolGray.200' : 'coolGray.600'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Heading fontSize={'sm'}>
          BuildWith NativeBase at #HackingWithNativeBase Hackathon
        </Heading>{' '}
      </Box>
    </Center>
  );
};

export default Footer;
