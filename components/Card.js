import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
  VStack,
} from 'native-base';
import { TouchableOpacity, Pressable } from 'react-native';

const Card = ({ data, navigation }) => {
  let { colorMode } = useColorMode();
  return renderCard(data);

  /**
   *
   * @returns RenderCard using nativebase components
   */
  function renderCard(data) {
    return (
      <Pressable onPress={() => navigation.push('DetailsDeal')}>
        <Box
          bg={colorMode === 'light' ? 'white' : 'coolGray.900'}
          w="100%"
          maxW={400}
          shadow={2}
          borderRadius={5}
          borderWidth="1"
          borderColor={colorMode === 'light' ? 'coolGray.200' : 'coolGray.600'}
          mt="20"
          flex={1}
        >
          {renderBannerImageOfCard(data.coverImage)}
          {AvatarList(data.coverImage, data.name)}
          {renderDescription(data.desc)}
          {cardFooter(data.perGained, data.launched, data.launchDays)}
          {createBadge(data.type)}
        </Box>
      </Pressable>
    );
  }

  /**
   *
   * @returns Renders the banner image
   */

  function renderBannerImageOfCard(logo) {
    return (
      <Image
        alt="img"
        borderTopRadius={5}
        h={'250px'}
        w={'100%'}
        borderBottomWidth={1}
        borderColor={'coolGray.200'}
        src={logo}
      />
    );
  }

  /**
   *
   * @returns Render Badge
   */
  function createBadge(types) {
    console.log(types);
    return (
      <HStack m={3} space={1}>
        {types.map((ele, i) => {
          return (
            <Box px={2} py={1} bg={'success.600'} borderRadius={200} key={i}>
              <Heading color={'white'} fontSize={'sm'}>
                {ele}{' '}
              </Heading>
            </Box>
          );
        })}
      </HStack>
    );
  }

  /**
   *
   * @returns renders the card footer which hold the information of project
   */
  function cardFooter(gained, launched, days) {
    return (
      <HStack m={3}>
        <Box flex={1}>
          {(launched == 1 || launched == -1) && (
            <VStack justifyContent={'center'} alignItems="center">
              <Heading fontSize={'sm'}>Total Raised </Heading>
              <Heading fontSize={'lg'}>{gained + '%'}</Heading>
            </VStack>
          )}
          {launched == 0 && (
            <VStack justifyContent={'center'} alignItems="center">
              <Heading fontSize={'sm'}>Not Yet Launched </Heading>
              {/* <Heading fontSize={"lg"}>{gained + "%"}</Heading> */}
            </VStack>
          )}
        </Box>
        <Box flex={1}>
          {launched == 0 && (
            <VStack justifyContent={'center'} alignItems="center">
              <Heading fontSize={'sm'}>Starts In</Heading>
              <Heading fontSize={'lg'}>{days}</Heading>
            </VStack>
          )}
          {launched == 1 && (
            <VStack justifyContent={'center'} alignItems="center">
              <Heading fontSize={'sm'}>Ends In</Heading>
              <Heading fontSize={'lg'}>{days}</Heading>
            </VStack>
          )}
          {launched == -1 && (
            <VStack justifyContent={'center'} alignItems="center">
              <Heading fontSize={'sm'}>Ended </Heading>
              <Heading fontSize={'lg'}>{days}</Heading>
            </VStack>
          )}
        </Box>
      </HStack>
    );
  }

  /**
   *
   * @returns renders the Description
   */

  function renderDescription(desc) {
    return <Text m="3">{desc}</Text>;
  }

  /**
   *
   * @returns Creates and Avatar image with name of project
   */
  function AvatarList(logo, name) {
    return (
      <HStack alignItems={'center'} m={3}>
        <Image
          alt="img"
          borderTopRadius={5}
          borderBottomWidth={1}
          borderColor={'coolGray.200'}
          h={'70'}
          w={'70'}
          src={logo}
        />
        <Heading m={2}>{name}</Heading>
      </HStack>
    );
  }
};

export default Card;
