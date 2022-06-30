/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  Avatar,
  AvatarGroup,
  useColorModeValue,
  Tag,
} from "@chakra-ui/react";
// Custom components
// Assets
import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import Card from "./Card";
import couverture from "../../assets/Nft3.png";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.png";
import Avatar4 from "../../assets/avatar4.png";

export default function ProjectCard({ project }) {
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue("navy.700", "white");
  const textColorBid = useColorModeValue("brand.500", "white");

  // const textColorBid = useColorModeValue("brand.500", "white");

  const bidders = [
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar1,
    Avatar1,
    Avatar1,
    Avatar1,
  ];

  return (
    <Card p="20px">
      <Flex direction={{ base: "column" }} justify="center">
        <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
          <Image
            src={couverture}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "100%", "3xl": "100%" }}
            borderRadius="20px"
          />
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              setLike(!like);
            }}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={like ? IoHeart : IoHeartOutline}
              color="brand.500"
            />
          </Button>
        </Box>
        <Flex
          flexDirection="column"
          justify="space-between"
          h="100%"
          alignItems="center"
        >
          <Flex
            justify="space-between"
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mb="auto"
          >
            <Flex direction="column" alignItems="center">
              <Text
                color={textColor}
                fontSize={{
                  base: "xl",
                  md: "lg",
                  lg: "lg",
                  xl: "lg",
                  "2xl": "md",
                  "3xl": "lg",
                }}
                mb="5px"
                fontWeight="bold"
                textAlign="center"
              >
                {project.title}
              </Text>
              <Text
                color="secondaryGray.600"
                fontSize={{
                  base: "sm",
                }}
                fontWeight="400"
              >
                {project.status}
              </Text>
            </Flex>
          </Flex>
          <Flex
            align="start"
            justify="space-between"
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mt="25px"
          >
            <AvatarGroup
              max={3}
              color={textColorBid}
              size="sm"
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}
              fontSize="12px"
            >
              {bidders.map((avt, key) => (
                <Avatar key={key} src={avt} />
              ))}
            </AvatarGroup>
            <Tag
              size="md"
              variant="subtle"
              colorScheme="purple"
              marginLeft={{ base: 0, "2xl": "50px" }}
            >
              JavaScript
            </Tag>

            {/* <Text fontWeight="700" fontSize="sm" color={textColorBid}>
              Vote: {project.vote}
            </Text> */}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
