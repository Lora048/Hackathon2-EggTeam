import React from "react";

// chakra imports
import { Box, useColorModeValue, Flex, Link, Stack } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { renderThumb, renderTrack, renderView } from "./Scrollbar";

// Assets

export default function Sidebar() {
  const variantChange = "0.2s linear";
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  // Chakra Color Mode
  const sidebarBg = useColorModeValue("white", "navy.800");
  const sidebarMargins = "0px";

  const links = [
    { name: "Accueil" },
    { name: "Projets" },
    { name: "Mon profil" },
  ];

  // SIDEBAR
  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="300px"
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
                {links.map((link) => (
                  <Link to="/"> {link.name} </Link>
                ))}
              </Flex>
            </Stack>
          </Flex>
        </Scrollbars>
      </Box>
    </Box>
  );
}
