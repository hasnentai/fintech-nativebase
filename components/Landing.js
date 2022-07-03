import {
  Box,
  Center,
  Container,
  Heading,
  ScrollView,
  useColorMode,
} from "native-base";
import { Platform } from "react-native";
import AppBar from "./AppBar";
import { NativeBaseHackButton } from "./Buttons";
import Card from "./Card";
import Footer from "./Footer";
import { NavBar } from "./NavBar";

const LandingPage = () => {
  let { colorMode } = useColorMode();
  return (
    <Box
      // safeAreaTop
      width={"100%"}
      bg={colorMode === "light" ? "primary.100" : "blueGray.900"}
    >
      {Platform.OS === "web" ? <NavBar /> : <AppBar />}
      <ScrollView _contentContainerStyle={{}}>
        <Center>
          <Container width="100%">
            <Box flexDir={"row"} minH={"800"} width={"100%"}>
              <Box flex={1} justifyContent="center">
                <Heading
                  fontSize={"7xl"}
                  justifyContent={"center"}
                  color={"white"}
                  fontWeight={"light"}
                >
                  Super Charge Your Investing Skills
                </Heading>
                <Heading fontSize={"lg"} color={"white"} fontWeight="bolder">
                  Invest on our platform for leading company and projects.Buy
                  Stocks and invest now and get high returns
                </Heading>
                <Box
                  pt={2}
                  justifyContent={"flex-start"}
                  alignItems="flex-start"
                >
                  <NativeBaseHackButton label={"Start Investing Now"} />
                </Box>
              </Box>
              <Box flex={1} alignItems="center">
                <Card />
              </Box>
            </Box>
          </Container>
          <Footer />
        </Center>
      </ScrollView>
    </Box>
  );
};

export default LandingPage;
