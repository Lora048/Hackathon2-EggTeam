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
  Icon,
} from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

export function LiensSidebar() {
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

  // verifies if routeName is the one active (in browser input)
  // const activeRoute = (routeName) => {
  //   return location.pathname.includes(routeName);
  // };

  const fakeData = [
    {
      name: "Accueil",
      layout: "/admin",
      path: "/",
      icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      secondary: true,
    },
    {
      name: "Mon profil",
      layout: "/admin",
      path: "/",
      icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
      secondary: true,
    },
  ];
  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = () => {
    return fakeData.map((data, index) => {
      if (data.category) {
        return (
          <>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight="bold"
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt="18px"
              pb="12px"
              key={index}
            >
              {data.name}
            </Text>
            {createLinks(data.items)}
          </>
        );
      } else if (
        data.layout === "/admin" ||
        data.layout === "/auth" ||
        data.layout === "/rtl"
      ) {
        return (
          <NavLink key={index} to={data.layout + data.path}>
            {data.icon ? (
              <Box role="group">
                <HStack py="5px" ps="10px">
                  <Flex w="100%" alignItems="center" justifyContent="center">
                    <Box color={textColor} me="18px" _groupHover={{ color: activeColor }}>
                      {data.icon}
                    </Box>
                    <Text
                      me="auto"
                      color={inactiveColor}
                      fontWeight={"normal"}
                      _groupHover={{ color: activeColor, fontWeight: "bold" }}
                    >
                      {data.name}
                    </Text>
                  </Flex>
                  <Box h="36px" w="4px" bg="transparent" borderRadius="5px" _groupHover={{ bg: brandColor }} />
                </HStack>
              </Box>
            ) : (
              <Box role="group">
                <HStack spacing="22px" py="5px" ps="10px">
                  <Text
                    me="auto"
                    color={inactiveColor}
                    fontWeight={"normal"}
                    _groupHover={{ color: activeColor, fontWeight: "bold" }}
                  >
                    {data.name}
                  </Text>
                  <Box h="36px" w="4px" bg="transparent" borderRadius="5px" _groupHover={{ bgColor: brandColor }} />
                </HStack>
              </Box>
            )}
          </NavLink>
        );
      }
    });
  };
  //  BRAND
  return createLinks(fakeData);
}

export default LiensSidebar;