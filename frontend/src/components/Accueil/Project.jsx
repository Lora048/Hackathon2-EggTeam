/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
// Chakra imports
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import React from "react";
// Assets
import Card from "./Card";

export default function Project(props) {
  const { title, number, link, image, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest} p="14px">
      <Flex align="center" direction={{ base: "column", md: "row" }}>
        <Image h="80px" w="80px" src={image} borderRadius="8px" me="20px" />
        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorPrimary}
            fontWeight="500"
            fontSize="md"
            mb="4px"
          >
            {title}
          </Text>
          <Text
            fontWeight="500"
            color={textColorSecondary}
            fontSize="sm"
            me="4px"
          >
            {number} projets •{" "}
            <Link fontWeight="500" color={brandColor} href={link} fontSize="sm">
              Voir les projets
            </Link>
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
