/* eslint-disable react/prop-types */
// chakra imports
import { Box, Flex, Stack, HSeparator } from "@chakra-ui/react";
//   Custom components

import React from "react";
import { LiensSidebar } from "./LiensSidebar";
import Logo from "../../../assets/logo-apside-bleu.png";

// FUNCTIONS

function Content(props) {
  const { data } = props;
  // SIDEBAR
  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      {Logo}
      <HSeparator mb="20px" />
      <Stack direction="column" mb="auto" mt="8px">
        <Box ps="20px" pe={{ md: "16px", "2xl": "1px" }}>
          <LiensSidebar routes={data} />
        </Box>
      </Stack>
    </Flex>
  );
}

export default Content;
