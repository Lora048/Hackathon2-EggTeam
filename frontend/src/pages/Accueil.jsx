/* eslint-disable react/prop-types */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import {
  Box,
  Grid,
  Flex,
  Text,
  useColorModeValue,
  Button,
  SimpleGrid,
  useDisclosure,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import Banner from "../components/Accueil/Banner";
import ProjectCard from "../components/Accueil/ProjectCard";
import Card from "../components/Accueil/Card";
import Projects from "../components/Accueil/Projects";
import Navbar from "../components/Accueil/Navbar/Navbar";
import Sidebar from "../components/Accueil/Sidebar/Sidebar";

export default function Accueil(props) {
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  // const textColorBrand = useColorModeValue("brand.500", "white");
  const { onOpen } = useDisclosure();
  const [fixed] = useState(false);
  const [inputUser, setInputUser] = useState("");
  // const [project, setProject] = useState({});
  const [allProjects, setAllProjects] = useState([]);
  // const [setTitle] = useState("");
  // const [setDescription] = useState("");
  // const [setDateCreated] = useState("");
  // const [setCover] = useState("");
  // const [setStatus] = useState([]);
  // Chakra Color Mode
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");

  const handleInput = (e) => {
    const input = e.target.value.toLowerCase();
    setInputUser(input);
  };

  useEffect(() => {
    axios.get(`http://localhost:5001/api/projects`).then((response) => {
      // setProject(response.data[0]);
      setAllProjects(response.data);
      // setStatus(response.data[0].status);
    });
  }, []);

  return (
    <Box h="100vh">
      <Navbar onOpen={onOpen} fixed={fixed} {...rest} />

      <Flex>
        <Flex minW="17vw" minH="20vh" gap="20px" flexDir="column">
          <Sidebar />
        </Flex>

        <Flex minW="80vw" pt={{ base: "180px", md: "80px", xl: "80px" }}>
          {/* Main Fields */}
          <Grid
            mb="20px"
            gridTemplateColumns={{ xl: "1fr 2fr", "2xl": "1fr 2fr" }}
            gap={{ base: "20px", xl: "20px" }}
            display={{ base: "block", xl: "grid" }}
            w="85vw"
          >
            <Flex
              flexDirection="column"
              gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
              mt="10%"
              w="20vw"
            >
              <Card px="0px">
                <Projects />
              </Card>
              <Card p="0px" mt="20px">
                <Flex
                  align={{ sm: "flex-start", lg: "center" }}
                  justify="space-between"
                  w="100%"
                  px="22px"
                  py="18px"
                >
                  <Text color={textColor} fontSize="xl" fontWeight="600">
                    Projets chez Apside
                  </Text>
                  <Button variant="action">Voir tout</Button>
                </Flex>
              </Card>
            </Flex>
            <Flex
              flexDirection="column"
              gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
              mt="3.5%"
              mr="2vw"
              w="59vw"
            >
              <Banner />
              <Flex direction="column">
                <Flex
                  mt="45px"
                  mb="20px"
                  justifyContent="space-between"
                  direction={{ base: "column", md: "row" }}
                  align={{ base: "start", md: "center" }}
                >
                  <Text
                    color={textColor}
                    fontSize="2xl"
                    ms="24px"
                    fontWeight="700"
                  >
                    Projets
                  </Text>
                  <InputGroup w={{ base: "100%", md: "200px" }} {...rest}>
                    <InputLeftElement
                      children={
                        <IconButton
                          bg="inherit"
                          borderRadius="inherit"
                          _hover="none"
                          _active={{
                            bg: "inherit",
                            transform: "none",
                            borderColor: "transparent",
                          }}
                          _focus={{
                            boxShadow: "none",
                          }}
                          icon={
                            <SearchIcon
                              color={searchIconColor}
                              w="15px"
                              h="15px"
                            />
                          }
                        />
                      }
                    />
                    <Input
                      variant="search"
                      fontSize="sm"
                      bg={background ? background : inputBg}
                      color={inputText}
                      fontWeight="500"
                      _placeholder={{ color: "gray.400", fontSize: "14px" }}
                      borderRadius={borderRadius ? borderRadius : "30px"}
                      placeholder={placeholder ? placeholder : "Search..."}
                      onChange={handleInput}
                      value={inputUser}
                    />
                  </InputGroup>
                </Flex>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
                  {allProjects
                    .filter((data) => data.title.includes(inputUser))
                    .map((datas) => (
                      <ProjectCard project={datas} />
                    ))}
                </SimpleGrid>
              </Flex>
            </Flex>
          </Grid>
          {/* Delete Product */}
        </Flex>
      </Flex>
    </Box>
  );
}
