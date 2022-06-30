/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Grid,
  Flex,
  Text,
  useColorModeValue,
  Button,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Banner from "../components/Accueil/Banner";
import ProjectCard from "../components/Accueil/ProjectCard";
import imageProjet from "../assets/Nft3.png";
import Card from "../components/Accueil/Card";
import Projects from "../components/Accueil/Projects";
import Navbar from "../components/Accueil/Navbar/Navbar";
import Sidebar from "../components/Accueil/Sidebar/Sidebar";

export default function Accueil(props) {
  const { ...rest } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  // const textColorBrand = useColorModeValue("brand.500", "white");
  const { onOpen } = useDisclosure();
  const [fixed] = useState(false);
  return (
    <Box h="100vh">
      <Navbar onOpen={onOpen} fixed={fixed} {...rest} />

      <Flex>
        <Flex
          minW={{ base: "100%", lg: "15%" }}
          minH="20vh"
          gap="20px"
          flexDir="column"
        >
          <Sidebar />
        </Flex>

        <Flex pt={{ base: "180px", md: "80px", xl: "80px" }}>
          {/* Main Fields */}
          <Grid
            mb="20px"
            gridTemplateColumns={{ xl: "1fr 2fr", "2xl": "1fr 2fr" }}
            gap={{ base: "20px", xl: "20px" }}
            display={{ base: "block", xl: "grid" }}
          >
            <Flex
              flexDirection="column"
              gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
              mt="10%"
            >
              <Card px="0px">
                <Projects />
              </Card>
              <Card p="0px">
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
                  <Button variant="action">See all</Button>
                </Flex>
              </Card>
            </Flex>
            <Flex
              flexDirection="column"
              gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
              mt="5%"
              mr="2%"
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
                </Flex>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
                  <ProjectCard
                    nom="mobilité douce"
                    vote="150"
                    statut="en cours"
                    image={imageProjet}
                  />
                  <ProjectCard
                    nom="mobilité douce"
                    vote="150"
                    statut="en cours"
                    image={imageProjet}
                  />
                  <ProjectCard
                    nom="mobilité douce"
                    vote="150"
                    statut="en cours"
                    image={imageProjet}
                  />
                </SimpleGrid>
                <Text
                  mt="45px"
                  mb="36px"
                  color={textColor}
                  fontSize="2xl"
                  ms="24px"
                  fontWeight="700"
                >
                  Recently Added
                </Text>
                <SimpleGrid
                  columns={{ base: 1, md: 3 }}
                  gap="20px"
                  mb={{ base: "20px", xl: "0px" }}
                >
                  <ProjectCard
                    nom="mobilité douce"
                    vote="150"
                    statut="en cours"
                    image={imageProjet}
                  />
                  <ProjectCard
                    nom="mobilité douce"
                    vote="150"
                    statut="en cours"
                    image={imageProjet}
                  />
                  <ProjectCard
                    nom="mobilité douce"
                    vote="150"
                    statut="en cours"
                    image={imageProjet}
                  />
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
