import { Flex, Text } from "@chakra-ui/react";
import { ReactTinyLink } from "react-tiny-link";

export default function Outils() {
  return (
    <Flex w="100%" justifyContent="space-around" flexWrap="wrap">
      <Flex p="2rem" flexDir="column" gap="4" w="45%">
        <Text fontSize="2xl" fontWeight="600" color="navy.700">
          Figma : Designer
        </Text>
        <ReactTinyLink
          align="center"
          cardSize="large"
          showGraphic
          maxLine={2}
          minLine={1}
          url="https://www.figma.com/fr/prototyping/"
        />
      </Flex>
      <Flex p="2rem" flexDir="column" gap="4" w="45%">
        <Text fontSize="2xl" fontWeight="600" color="navy.700">
          GitHub : Coder collaboratif
        </Text>
        <ReactTinyLink
          align="center"
          cardSize="large"
          showGraphic
          maxLine={2}
          minLine={1}
          url="https://github.com/"
        />
      </Flex>
      <Flex p="2rem" flexDir="column" gap="4" w="45%">
        <Text fontSize="2xl" fontWeight="600" color="navy.700">
          Slack : Communiquer
        </Text>
        <ReactTinyLink
          align="center"
          cardSize="large"
          showGraphic
          maxLine={2}
          minLine={1}
          url="https://slack.com/intl/fr-fr/"
        />
      </Flex>
      <Flex p="2rem" flexDir="column" gap="4" w="45%">
        <Text fontSize="2xl" fontWeight="600" color="navy.700">
          Trello : Gerer les tâches
        </Text>
        <ReactTinyLink
          align="center"
          cardSize="large"
          showGraphic
          maxLine={2}
          minLine={1}
          url="https://blog.trello.com/fr/modeles-tableau-trello"
        />
      </Flex>
    </Flex>
  );
}
