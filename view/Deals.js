import {
  Box,
  Center,
  Container,
  Heading,
  VStack,
  useColorMode,
  HStack,
  Stack,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Input,
  Flex,
} from "native-base";
import { NativeBaseHackButtonGroup } from "../components/Buttons";
import NativeBaseHackSelect from "../components/DropDown";

const Deals = () => {
  let { colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Box
      bg={colorMode === "light" ? "coolGray.100" : "coolGray.900"}
      h={"100vh"}
      w="100vw"
      minH={"100vh"}
    >
      <Box alignItems={"center"}>
        <Container width={"100%"} my="20">
          <VStack>
            <Heading>Grab Live Deals</Heading>
            <Heading fontSize={"sm"}>
              Invest into leading projects and get a great returns
            </Heading>
          </VStack>

          <Box w={"full"}>
            <Flex w="full" flexDir={"row"} justifyContent="start" py={"10"}>
              <Stack alignItems="center" px={"2"}>
                <InputGroup m>
                  <Input w={"430"} placeholder="Search for Deals" />
                  <InputRightAddon children={".io"} />
                </InputGroup>
              </Stack>
              <NativeBaseHackSelect />
            </Flex>
            <Center>
              <NativeBaseHackButtonGroup label={["All", "Public", "Private"]} />
            </Center>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Deals;
