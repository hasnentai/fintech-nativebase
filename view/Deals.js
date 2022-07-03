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
  Icon,
  ScrollView,
} from "native-base";
import { NativeBaseHackButtonGroup } from "../components/Buttons";
import Card from "../components/Card";
import NativeBaseHackSelect from "../components/DropDown";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { NavBar } from "../components/NavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../components/AppBar";
import { Platform } from "react-native";
import { useEffect, useState } from "react";
import { getAllCards } from "../api/getCardsInfo";
const Deals = () => {
  let { colorMode } = useColorMode();
  
  const [cards,setCards] = useState([])

  useEffect(async ()=>{
    let x= await getAllCards();
    
    if(x.status === 'success'){
      setCards(x.data);
    }
    else{
      alert(x.message)
    }
  },[])
  
  return (
    <Box
      // safeAreaTop
      width={"100%"}
      bg={colorMode === "light" ? "primary.300" : "blueGray.900"}
    >
      {Platform.OS === "web" ? <NavBar /> : <AppBar />}
      <ScrollView _contentContainerStyle={{}}>
        {/* <NavBar /> */}
        <Box
          bg={colorMode === "light" ? "coolGray.100" : "coolGray.900"}
          w="100%"
          justifyContent="center"
          alignItems={"center"}
        >
          <Container minW={"95%"} justifyContent="center">
            <Box>
              <VStack marginTop={10}>
                <Heading>Grab Live Deals</Heading>
                <Heading fontSize={"sm"}>
                  Invest into leading projects and get a great returns
                </Heading>
              </VStack>

              <Box w={"100%"}>
                <HStack
                  w="100%"
                  flexDir={"row"}
                  justifyContent="flex-start"
                  py={1}
                >
                  <Box flex={2}>
                    <Box w={"100%"} alignItems={"center"}>
                      <HStack
                        width={{ md: "65%" }}
                        flexDir={"row"}
                        justifyContent="flex-start"
                        py={10}
                      >
                        <Box flex={2}>
                          <InputGroup w={"100%"}>
                            <Input w={"80%"} placeholder="Search for Deals" />
                            <InputRightAddon
                              children={
                                <Icon as={Ionicons} name="search" size={5} />
                              }
                            />
                          </InputGroup>
                        </Box>
                        <Box flex={1} w="100%">
                          <NativeBaseHackSelect />
                        </Box>
                      </HStack>
                      <Center>
                        <NativeBaseHackButtonGroup
                          label={["All", "Public", "Private"]}
                        />
                      </Center>
                      <HStack
                        width={{ md: "80%" }}
                        justifyContent="space-between"
                        flexWrap={"wrap"}
                      >
                        {cards.map((e, i) => {
                          return <Card key ={i} data = {e}/>;
                        })}
                      </HStack>
                    </Box>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </Container>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Deals;
