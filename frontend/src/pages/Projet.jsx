import { Flex, Box, Heading } from "@chakra-ui/react";

import ButtonGroupProjetNavigation from "../components/Projet/ButtonGroupProjetNavigation";

export default function Projet() {
  return (
    <Flex>
      <Box bgColor="white" w="20%" minW="20%" h="100vh">
        NAVBAR
      </Box>
      <Flex p="2rem" flexDir="column" w="80%" gap="4">
        <Heading align="left">TITRE PROJET</Heading>
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
