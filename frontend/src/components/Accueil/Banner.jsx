/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

// Chakra imports

// Assets
import banner from "./NftBanner1.png";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction="column"
      bgImage={banner}
      bgSize="cover"
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius="30px"
    >
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color="white"
        mb="14px"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight="700"
        lineHeight={{ base: "32px", md: "42px" }}
      >
        Découvrez, créez, innovez !
      </Text>
      <Text
        fontSize="md"
        color="#E3DAFF"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight="500"
        mb="20px"
        lineHeight="28px"
      >
        Entrez dans l'univers créatif d'Apside, découvrez les projets menés par
        les équipes partout en France.
      </Text>
    </Flex>
  );
}
