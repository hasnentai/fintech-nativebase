import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
  VStack,
} from 'native-base';

const Card = () => {
  let { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === 'light' ? 'white' : 'coolGray.900'}
      w="100%"
      maxW={400}
      shadow={2}
      borderRadius={5}
      borderWidth="1"
      borderColor={colorMode === 'light' ? 'coolGray.200' : 'coolGray.600'}
      mt="20"
    >
      <Image
        alt="img"
        borderTopRadius={5}
        h={'300px'}
        w={'100%'}
        borderBottomWidth={1}
        borderColor={'coolGray.200'}
        src="https://www.tykeinvest.com/_next/image?url=https%3A%2F%2Ftyke-startup-bucket.s3.ap-south-1.amazonaws.com%2FUNIVEST%2520COMMUNICATION%2520TECHNOLOGIES%2520PRIVATE%2520LIMITED%2FTime%2520to%2520turn%2520Sharks%2520to%2520TagZ......%2520%252822%2529.png&w=828&q=75"
      />
      <HStack alignItems={'center'} m={3}>
        <Image
          alt="img"
          borderRadius={500}
          borderWidth={1}
          borderColor={'coolGray.200'}
          h={'70'}
          w={'70'}
          src="https://www.tykeinvest.com/_next/image?url=https%3A%2F%2Ftyke-startup-bucket.s3.ap-south-1.amazonaws.com%2FUNIVEST%2520COMMUNICATION%2520TECHNOLOGIES%2520PRIVATE%2520LIMITED%2FTime%2520to%2520turn%2520Sharks%2520to%2520TagZ......%2520%252822%2529.png&w=828&q=75"
        />
        <Heading m={2}>UniVest</Heading>
      </HStack>
      <Text m="3">
        Univest is a unique investments ecosystem solving the daily problems of
        80 mn stock market investors & earning them higher returns; by letting
        users watch their friends' trades in real time, chat about investments,
        see AI based recommendations on portfolio & invest through any brokerage
        platform.
      </Text>
      <HStack m={3}>
        <Box flex={1}>
          <VStack justifyContent={'center'} alignItems="center">
            <Heading fontSize={'sm'}>Total Raised </Heading>
            <Heading fontSize={'lg'}>50%</Heading>
          </VStack>
        </Box>
        <Box flex={1}>
          <VStack justifyContent={'center'} alignItems="center">
            <Heading fontSize={'sm'}>Ends In </Heading>
            <Heading fontSize={'lg'}>21 Days</Heading>
          </VStack>
        </Box>
      </HStack>

      <HStack m={3} space={1}>
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
    </Box>
  );
};

export default Card;
