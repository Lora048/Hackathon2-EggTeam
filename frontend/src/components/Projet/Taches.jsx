import { Flex, Text } from "@chakra-ui/react";
import { ReactTinyLink } from "react-tiny-link";

export default function Description() {
  return (
    <Flex>
      <Flex p="2rem" flexDir="column" w="100%" gap="4">
        <Text fontSize="2xl" align="left">
          Figma du projet
        </Text>
        <ReactTinyLink
          align="center"
          cardSize="large"
          showGraphic
          maxLine={2}
          minLine={1}
          url="https://www.figma.com/file/KTFPuhOkABSq8lPWepVlqh/Hackathon2-x-EggTeam?node-id=34%3A6"
        />
      </Flex>
    </Flex>
  );
}
