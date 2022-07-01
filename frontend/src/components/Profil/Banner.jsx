import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import imageProjet from "../../assets/Nft3.png";

export default function Banner() {
  const [user, setUser] = useState([]);

  const { userId } = useParams();

  const getUser = () => {
    axios.get(`http://localhost:5001/api/users/${userId}`).then((response) => {
      setUser(response.data.currentUser);
    });
  };

  useEffect(() => getUser(), []);
  return (
    <Flex flexDirection="column" w="100%">
      <Flex
        p="20px"
        flexDirection="column"
        w="100%"
        pos="relative"
        borderRadius="20px"
        minW="0px"
        bg="#ffffff"
        backgroundClip="border-box"
      >
        <Box
          bgImage={imageProjet}
          bgSize="cover"
          borderRadius="16px"
          h="131px"
          w="100%"
        />
        <Avatar
          mx="auto"
          src="https://i.pravatar.cc/300"
          h="150px"
          w="150px"
          mt="-80px"
          border="4px solid"
          borderColor="white"
        />
        <Flex alignSelf="center" gap="2">
          <Text
            color="secondaryGray.900"
            fontWeight="bold"
            fontSize="3xl"
            mt="10px"
          >
            {user.firstname}
          </Text>
          <Text
            color="secondaryGray.900"
            fontWeight="bold"
            fontSize="3xl"
            mt="10px"
          >
            {user.lastname}
          </Text>
        </Flex>
        <Text color="gray.400" fontSize="xl">
          {user.jobPost}
        </Text>
        <Text color="gray.400" fontSize="xl">
          Agence de : {user.agency}
        </Text>
      </Flex>
    </Flex>
  );
}
