import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: "none", md: "flex" }}
      float={"left"}
      alignItems={{ base: "flex-start", md: "center" }}
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: selectedChat ? "68%" : "100%" }}
      borderRadius="lg"
      borderWidth="1px"
      ml={{ base: 0, md: selectedChat ? "auto" : 0 }}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
