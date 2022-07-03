import { Box, Center, Heading } from "native-base";

const Footer = () => {
  return (
    <Center width={"100%"}>
      <Box borderWidth={1} width={"100%"}>
        <Heading>
          BuildWith NativeBase at #HackingWithNativeBase Hackathon
        </Heading>{" "}
      </Box>
    </Center>
  );
};

export default Footer;
