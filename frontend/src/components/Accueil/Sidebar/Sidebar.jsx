/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

// chakra imports
import { Box, useColorModeValue, Flex, Stack, Image } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";
import Logo from "../../../assets/logo-apside-bleu.png";
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

  const { liens, user } = props;
  const [userProjects, setUserProjects] = useState([]);
  // SIDEBAR
  const getProjects = () => {
    return axios
      .get(`http://localhost:5001/api/users/${user}/projects`)
      .then((res) => setUserProjects(res.data));
  };

  useEffect(() => {
    getProjects();
  }, []);

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
          <Flex
            direction="column"
            height="100%"
            pt="25px"
            borderRadius="30px"
            gap="20px"
          >
            <Image src={Logo} w="150px" ml="20px" />
            <Stack direction="column" mb="auto" mt="8px" gap="20px">
              <Flex
                direction="column"
                ps="20px"
                pe={{ md: "16px", "2xl": "1px" }}
              >
                <LiensSidebar
                  routes={liens}
                  projects={userProjects}
                  user={user}
                />
              </Flex>
            </Stack>
          </Flex>
        </Scrollbars>
      </Box>
    </Box>
  );
}
