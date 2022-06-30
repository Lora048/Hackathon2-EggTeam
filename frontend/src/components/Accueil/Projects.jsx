// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
// Custom components
import React from "react";
import Project from "./Project";
import imageProject from "../../assets/Nft3.png";
import Card from "./Card";

export default function Projects() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="20px"
      >
        Etat des projets
      </Text>

      <Project
        boxShadow={cardShadow}
        mb="20px"
        image={imageProject}
        number="4"
        link="#"
        title="A venir"
      />
      <Project
        boxShadow={cardShadow}
        mb="20px"
        image={imageProject}
        number="27"
        link="#"
        title="Terminés"
      />
      <Project
        boxShadow={cardShadow}
        image={imageProject}
        number="12"
        link="#"
        title="En cours"
      />
    </Card>
  );
}
