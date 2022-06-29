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
  const textColorSecondary = "gray.400";
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
        mb="4px"
      >
        All projects
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        Here you can find more details about your projects. Keep you user
        engaged by providing meaningful information.
      </Text>
      <Project
        boxShadow={cardShadow}
        mb="20px"
        image={imageProject}
        ranking="1"
        link="#"
        title="Technology behind the Blockchain"
      />
      <Project
        boxShadow={cardShadow}
        mb="20px"
        image={imageProject}
        ranking="2"
        link="#"
        title="Greatest way to a good Economy"
      />
      <Project
        boxShadow={cardShadow}
        image={imageProject}
        ranking="3"
        link="#"
        title="Most essential tips for Burnout"
      />
    </Card>
  );
}
