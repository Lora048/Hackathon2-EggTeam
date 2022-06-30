/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// chakra imports
import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  List,
  ListIcon,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdOutlineStickyNote2,
  MdHome,
  MdFolderOpen,
} from "react-icons/md";

export function LiensSidebar({ projects, user }) {
  //   Chakra color mode
  let location = useLocation();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  return (
    <>
      <NavLink to={`/accueil/${user}`}>
        <Box role="group" display="flex-column">
          <HStack py="5px" ps="10px">
            <Box role="group" display="flex-column">
              <Flex
                w="100%"
                alignItems="center"
                justifyContent="center"
                gap="18px"
              >
                <Box color={textColor} _groupHover={{ color: "brand.500" }}>
                  <MdHome
                    size="20px"
                    lineheight="1em"
                    color={textColor}
                    _groupHover={{ color: "brand.500" }}
                  />
                </Box>

                <Text
                  me="auto"
                  color={inactiveColor}
                  fontWeight={"normal"}
                  _groupHover={{
                    color: activeColor,
                    fontWeight: "bold",
                  }}
                >
                  Accueil
                </Text>
              </Flex>
            </Box>
          </HStack>
        </Box>
      </NavLink>
      <NavLink to={`/accueil/${user}/profil`}>
        <Box role="group" display="flex-column">
          <HStack py="5px" ps="10px">
            <Box role="group" display="flex-column">
              <Flex
                w="100%"
                alignItems="center"
                justifyContent="center"
                gap="18px"
              >
                <Box color={textColor} _groupHover={{ color: "brand.500" }}>
                  <MdPerson
                    size="20px"
                    lineheight="1em"
                    color={textColor}
                    _groupHover={{ color: "brand.500" }}
                  />
                </Box>

                <Text
                  me="auto"
                  color={inactiveColor}
                  fontWeight={"normal"}
                  _groupHover={{
                    color: activeColor,
                    fontWeight: "bold",
                  }}
                >
                  Profil
                </Text>
              </Flex>
            </Box>
          </HStack>
        </Box>
      </NavLink>
      <Box role="group" display="flex-column">
        <HStack py="5px" ps="10px">
          <Flex w="100%" alignItems="center" justifyContent="center" gap="18px">
            <Box color={textColor} _groupHover={{ color: "brand.500" }}>
              <MdFolderOpen
                size="20px"
                lineheight="1em"
                color={textColor}
                _groupHover={{ color: "brand.500" }}
              />
            </Box>

            <Text
              me="auto"
              color={inactiveColor}
              fontWeight={"normal"}
              _groupHover={{
                color: activeColor,
                fontWeight: "bold",
              }}
            >
              Mes Projets
            </Text>
          </Flex>
          <Box
            h="36px"
            w="4px"
            bg="transparent"
            borderRadius="5px"
            _groupHover={{ bg: "brand.500" }}
          />
        </HStack>
        <List spacing={3}>
          {projects.map((project) => (
            <NavLink
              key={project.id}
              to={`/accueil/${user}/projet/${project.id}`}
            >
              <ListItem>
                <Flex
                  key={project.id}
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  ml="15px"
                  mt="10px"
                  mb="15px"
                >
                  <ListIcon
                    as={MdOutlineStickyNote2}
                    color="secondaryGray.500"
                  />
                  <Text
                    me="auto"
                    fontSize="sm"
                    color={inactiveColor}
                    fontWeight={"normal"}
                    _hover={{ color: "brand.500" }}
                  >
                    {project.title}
                  </Text>
                </Flex>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Box>
    </>
  );
}

export default LiensSidebar;
