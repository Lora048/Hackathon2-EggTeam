/* eslint-disable react/prop-types */
import React from "react";

// chakra imports
import { Box, useColorModeValue, Flex, Stack } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { renderThumb, renderTrack, renderView } from "../Scrollbar";
import { LiensSidebar } from "./LiensSidebar";
// Assets

export default function Sidebar(props) {
  const variantChange = "0.2s linear";
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  // Chakra Color Mode
  const sidebarBg = useColorModeValue("white", "navy.800");
  const sidebarMargins = "0px";

  const { liens } = props;

  // SIDEBAR
  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="15vw"
        h="100vh"
        m={sidebarMargins}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}
        >
          <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
            {/* <Brand /> */}
            <Stack direction="column" mb="auto" mt="8px">
              <Flex
                direction="column"
                ps="20px"
                pe={{ md: "16px", "2xl": "1px" }}
              >
                <LiensSidebar routes={liens} />
              </Flex>
            </Stack>
          </Flex>
        </Scrollbars>
      </Box>
    </Box>
  );
}
