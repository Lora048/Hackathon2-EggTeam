/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
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
  Select,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import Banner from "../components/Accueil/Banner";
import ProjectCard from "../components/Accueil/ProjectCard";
import Card from "../components/Accueil/Card";
import Projects from "../components/Accueil/Projects";
import Navbar from "../components/Accueil/Navbar/Navbar";
import Sidebar from "../components/Accueil/Sidebar/Sidebar";

export default function Accueil(props) {
  const { userId } = useParams();

  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  // const textColorBrand = useColorModeValue("brand.500", "white");
  const { onOpen } = useDisclosure();
  const [fixed] = useState(false);
  const [inputUser, setInputUser] = useState("");
  // const [project, setProject] = useState({});
  const [allProjects, setAllProjects] = useState([]);
  const [choosenValueAgency, setChoosenValueAgency] = useState("");
  const [choosenValueSkills, setChoosenValueSkills] = useState("");

  // Chakra Color Mode
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");

  const handleChangeAgency = (e) => {
    setChoosenValueAgency(e.target.value);
  };
  const handleChangeSkills = (e) => {
    setChoosenValueSkills(e.target.value);
  };

  const handleInput = (e) => {
    const input = e.target.value;
    setInputUser(input);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/projects`)
      .then((response) => {
        setAllProjects(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  // const fakeVote = () => [4, 10, 36, 10, 1];

  return (
    <Box h="100vh">
      <Navbar onOpen={onOpen} fixed={fixed} {...rest} user={userId} />

      <Flex>
        <Flex minW="17vw" minH="20vh" gap="20px" flexDir="column">
          <Sidebar user={userId} />
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

                  <Flex align="center">
                    <Button
                      variant="lightBrand"
                      fontWeight="500"
                      fontSize="14px"
                      py="20px"
                      px="27"
                      me="38px"
                    >
                      Meilleurs votes
                    </Button>
                    <Select
                      placeholder="Agence"
                      variant="filled"
                      width="25%"
                      value={choosenValueAgency}
                      onChange={handleChangeAgency}
                      marginRight="35px"
                    >
                      <option value="Paris">Paris</option>
                      <option value="Tours">Tours</option>
                      <option value="Lyon">Lyon</option>
                      <option value="Bordeaux">Bordeaux</option>
                      <option value="Bayonne">Bayonne</option>
                    </Select>

                    <Select
                      placeholder="Compétence"
                      variant="filled"
                      width="25%"
                      value={choosenValueSkills}
                      onChange={handleChangeSkills}
                      marginRight="35px"
                    >
                      <option value="Javascript">Javascript</option>
                      <option value="TypeScript">TypeScript</option>
                      <option value="Docker">Docker</option>
                      <option value="Github">Github</option>
                      <option value="Angular">Angular</option>
                      <option value="React">React</option>
                      <option value="VueJS">VueJS</option>
                      <option value="Figma">Figma</option>
                      <option value="Suite Adobe">Suite Adobe</option>
                      <option value="NodeJS">NodeJS</option>
                      <option value="Express">Express</option>
                      <option value="Java">Java</option>
                      <option value="C++">C++</option>
                      <option value="React Native">React Native</option>
                      <option value="flutter">flutter</option>
                      <option value="Dart">Dart</option>
                    </Select>
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
                        placeholder="Rechercher..."
                        onChange={handleInput}
                        value={inputUser}
                      />
                    </InputGroup>
                  </Flex>
                </Flex>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
                  {allProjects
                    .filter((data) => {
                      if (
                        !inputUser &&
                        !choosenValueAgency &&
                        !choosenValueSkills
                      ) {
                        return [data];
                      }
                      if (inputUser) {
                        return data.title.includes(inputUser);
                      }
                      if (choosenValueAgency) {
                        return data.fk_project_userId.agency.includes(
                          choosenValueAgency
                        );
                      }
                      if (choosenValueAgency && inputUser) {
                        return (
                          data.fk_project_userId.agency.includes(
                            choosenValueAgency
                          ) && data.title.includes(inputUser)
                        );
                      }
                      if (choosenValueSkills) {
                        return data.fk_project_userId.hardSkills.includes(
                          choosenValueSkills
                        );
                      }
                      if (choosenValueSkills && inputUser) {
                        return (
                          data.fk_project_userId.hardSkills.includes(
                            choosenValueSkills
                          ) && data.title.includes(inputUser)
                        );
                      }
                      if (choosenValueSkills && inputUser && choosenValueAgency)
                        return (
                          data.fk_project_userId.agency.includes(
                            choosenValueAgency
                          ) &&
                          data.fk_project_userId.hardSkills.includes(
                            choosenValueAgency
                          ) &&
                          data.title.includes(inputUser)
                        );
                    })
                    .map((project) => (
                      <ProjectCard project={project} />
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
