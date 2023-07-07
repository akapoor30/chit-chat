import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
} from "@chakra-ui/react";
import Signin from "../components/authentication/Signin";
import Signup from "../components/authentication/Signup";
const Homepage = () => {
  return (
    <Container maxW="x1" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        display="flex"
        p={3}
        bg={"#7ea0cb"}
        w="30%"
        m="30px 0 15px 0"
        borderRadius="10"
        borderWidth="1px"
      >
        <Text fontSize={"4x1"} fontFamily={"Work Sans"}>
          Chit- Chat
        </Text>
      </Box>
      <Box bg="#7ea0cb" w="30%" p={4} borderRadius={"lg"} borderWidth={"1px"}>
        <Tabs defaultIndex={1} variant={"soft-rounded"}>
          <TabPanels>
            <TabPanel>
              <Image
                boxSize="200px"
                fit="cover"
                justifyContent="center"
                display="flex"
                src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?w=740&t=st=1688763173~exp=1688763773~hmac=c1e13404515a82fc96933baa8e1375da74c4ae6884c07e012fc085c95979b0d1"
              />
            </TabPanel>
            <TabPanel>
              <Image
                boxSize="200px"
                fit="cover"
                justifyContent="center"
                display="flex"
                src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1688763114~exp=1688763714~hmac=a9aaea8fd1015af9659a90e1cb9c04affbc89f16ddeb2831eef0e6e38fdbe577"
              />
            </TabPanel>
          </TabPanels>
          <TabList>
            <Tab width={"50%"}>Signin</Tab>
            <Tab width={"50%"}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Signin />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
