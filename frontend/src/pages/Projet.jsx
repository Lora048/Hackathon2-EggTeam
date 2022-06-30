/* eslint-disable react/jsx-props-no-spreading */
import { Flex, useDisclosure } from "@chakra-ui/react";

import { useState } from "react";

import ButtonGroupProjetNavigation from "../components/Projet/ButtonGroupProjetNavigation";
import Sidebar from "../components/Accueil/Sidebar/Sidebar";
import Navbar from "../components/Accueil/Navbar/Navbar";

export default function Projet(props) {
  const { onOpen } = useDisclosure();
  const [fixed] = useState(false);
  const { ...rest } = props;
  return (
    <Flex>
      <Navbar onOpen={onOpen} fixed={fixed} {...rest} />
      <Flex
        minW={{ base: "100%", lg: "15%" }}
        minH="20vh"
        gap="20px"
        flexDir="column"
      >
        <Sidebar />
      </Flex>
      <Flex p="2rem" flexDir="column" w="80%" gap="4" h="100vh" mt="5rem">
        <Flex
          w="100%"
          p="20px"
          borderRadius="20px"
          bgColor="rgb(255, 255, 255)"
        >
          <ButtonGroupProjetNavigation />
        </Flex>
      </Flex>
    </Flex>
  );
}
