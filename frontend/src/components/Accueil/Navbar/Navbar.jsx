/* eslint-disable no-use-before-define */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Chakra Imports
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  useDisclosure,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import AdminNavbarLinks from "./NavbarLinksAdmin";
import CreateProjectModal from "../../CreateProject/CreateProjectModal";

export default function Navbar(props) {
  // eslint-disable-next-line no-unused-vars
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });

  const { secondary, message, user } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  const mainText = useColorModeValue("navy.700", "white");
  const secondaryText = useColorModeValue("gray.700", "white");
  const navbarPosition = "fixed";
  const navbarFilter = "none";
  const navbarBackdrop = "blur(20px)";
  const navbarShadow = "none";
  const navbarBg = useColorModeValue(
    "rgba(244, 247, 254, 0.2)",
    "rgba(11,20,55,0.5)"
  );
  const navbarBorder = "transparent";
  const secondaryMargin = "0px";
  const paddingX = "15px";
  const gap = "0px";
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const onglets = [{ name: "Projets" }];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        position={navbarPosition}
        boxShadow={navbarShadow}
        bg={navbarBg}
        borderColor={navbarBorder}
        filter={navbarFilter}
        backdropFilter={navbarBackdrop}
        backgroundPosition="center"
        backgroundSize="cover"
        borderRadius="16px"
        borderWidth="1.5px"
        borderStyle="solid"
        transitionDelay="0s, 0s, 0s, 0s"
        transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
        transition-property="box-shadow, background-color, filter, border"
        transitionTimingFunction="linear, linear, linear, linear"
        alignItems={{ xl: "center" }}
        display={secondary ? "block" : "flex"}
        minH="75px"
        justifyContent={{ xl: "center" }}
        lineHeight="25.6px"
        mx="auto"
        mt={secondaryMargin}
        pb="8px"
        right={{ base: "2vw" }}
        px={{
          sm: paddingX,
          md: "10px",
        }}
        ps={{
          xl: "12px",
        }}
        pt="8px"
        top={{ base: "12px", md: "16px", xl: "18px" }}
        w="81vw"
        zIndex="10"
      >
        <Flex>
          <Flex
            w="100%"
            flexDirection={{
              sm: "column",
              md: "row",
            }}
            alignItems={{ xl: "center" }}
            mb={gap}
          >
            <Box mb={{ sm: "8px", md: "0px" }}>
              <Breadcrumb>
                <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
                  <BreadcrumbLink href="#" color={secondaryText}>
                    Pages
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem color={secondaryText} fontSize="sm">
                  <BreadcrumbLink href="#" color={secondaryText}>
                    Projets
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              {/* Here we create navbar brand, based on route name */}
              {onglets.map((onglet) => (
                <Link
                  to="/"
                  color={mainText}
                  href="#"
                  bg="inherit"
                  borderRadius="inherit"
                  fontWeight="bold"
                  fontSize="34px"
                  _hover={{ color: { mainText } }}
                  _active={{
                    bg: "inherit",
                    transform: "none",
                    borderColor: "transparent",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  {onglet.name}
                </Link>
              ))}
            </Box>
          </Flex>
        </Flex>

        <Box
          ms="auto"
          w={{ sm: "100%", md: "unset" }}
          display="flex"
          alignItems="center"
          gap="18px"
        >
          <Button
            leftIcon={<AddIcon />}
            size="md"
            bgColor="orange.400"
            _hover={{ bgColor: "orange.500" }}
            color="white"
            onClick={onOpen}
          >
            Cr??er un projet
          </Button>
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
            scrolled={scrolled}
          />
        </Box>
      </Box>

      {secondary ? <Text color="white">{message}</Text> : null}
      <CreateProjectModal
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        user={user}
      />
    </Box>
  );
}

Navbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
