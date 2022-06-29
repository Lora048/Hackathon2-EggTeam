import { Flex, Text, Image } from "@chakra-ui/react";
// import Tiptap from "./Tiptap";

export default function Description() {
  return (
    <Flex flexDir="column">
      <Text fontSize="2xl" align="left">
        Détail du projet
      </Text>
      <Flex p="2rem" flexDir="column" w="100%">
        <Text fontSize="2xl" align="left">
          Détail du projet
        </Text>
        <Flex w="100%" my="2rem" flexDir="column" gap="4">
          <Text align="left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            hic magni fuga, ipsam pariatur vel non sequi. Atque cumque odio
            doloribus? Excepturi, cumque. Expedita tenetur et natus adipisci,
            accusamus quia.
          </Text>
          <Text align="left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            hic magni fuga, ipsam pariatur vel non sequi. Atque cumque odio
            doloribus? Excepturi, cumque. Expedita tenetur et natus adipisci,
            accusamus quia.
          </Text>
        </Flex>
        <Text fontSize="2xl" align="left">
          Images et vidéos
        </Text>
        <Flex w="fit-content" my="2rem" flexDir="row" gap="4">
          <Flex flexDir="column" gap="4">
            <Image
              src="https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
              alt=""
              w="200px"
            />
            <Text>Titre de l'image</Text>
          </Flex>
          <Flex flexDir="column" gap="4">
            <Image
              src="https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
              alt=""
              w="200px"
            />
            <Text>Titre de l'image</Text>
          </Flex>
          <Flex flexDir="column" gap="4">
            <Image
              src="https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
              alt=""
              w="200px"
            />
            <Text>Titre de l'image</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* <Tiptap /> */}
    </Flex>
  );
}
