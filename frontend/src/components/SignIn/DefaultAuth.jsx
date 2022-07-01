/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
// Chakra imports
import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
// Custom components

// Assets

import FixedPlugin from "./FixedPlugin";
import Logo from "../../assets/logo-apside-blanc.png";

function AuthIllustration(props) {
  const { children, illustrationBackground } = props;
  // Chakra color mode
  return (
    <Flex position="relative" h="max-content">
      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        w="100%"
        maxW={{ md: "66%", lg: "1313px" }}
        mx="auto"
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent="start"
        direction="column"
      >
        {children}
        <Box
          display={{ base: "none", md: "block" }}
          h="100%"
          minH="100vh"
          w={{ lg: "50vw", "2xl": "44vw" }}
          position="absolute"
          right="0px"
        >
          <Flex
            bg={`url(${illustrationBackground})`}
            justify="center"
            align="end"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}
          >
            <Image src={Logo} w="500px" ml="20px" alignSelf="center" />
          </Flex>
        </Box>
      </Flex>
      <FixedPlugin />
    </Flex>
  );
}
export default AuthIllustration;
