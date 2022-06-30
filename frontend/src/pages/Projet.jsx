/* eslint-disable react/jsx-props-no-spreading */
import { Flex } from "@chakra-ui/react";

import ButtonGroupProjetNavigation from "../components/Projet/ButtonGroupProjetNavigation";
import Sidebar from "../components/Accueil/Sidebar/Sidebar";
import HeadProject from "../components/Projet/HeadProject";

export default function Projet() {
  return (
    <Flex>
      <Flex
        minW={{ base: "100%", lg: "15%" }}
        minH="20vh"
        gap="20px"
        flexDir="column"
      >
        <Sidebar />
      </Flex>
      <Flex p="2rem" flexDir="column" w="80%" h="100vh">
        <Flex
          flexDir="column"
          w="100%"
          p="20px"
          borderRadius="20px"
          bgColor="rgb(255, 255, 255)"
          gap="5"
        >
          <HeadProject />
          <ButtonGroupProjetNavigation />
        </Flex>
      </Flex>
    </Flex>
  );
}
