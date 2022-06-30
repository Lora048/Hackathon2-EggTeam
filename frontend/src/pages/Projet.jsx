import { Flex } from "@chakra-ui/react";

import ButtonGroupProjetNavigation from "../components/Projet/ButtonGroupProjetNavigation";
import Sidebar from "../components/Accueil/Sidebar/Sidebar";

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
      <Flex p="2rem" flexDir="column" w="80%" gap="4" h="100vh">
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
