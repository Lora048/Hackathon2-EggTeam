import { Flex, Text, Image, Box, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import imageProjet from "../../assets/Nft3.png";

export default function Projects() {
  const [projets, setProjets] = useState([]);

  const { userId } = useParams();

  const getProjects = () => {
    axios
      .get(`http://localhost:5001/api/users/${userId}/projects`)
      .then((response) => {
        setProjets(response.data);
      });
  };

  useEffect(() => getProjects(), []);
  return (
    <Flex flexDirection="column" w="45%">
      <Flex
        p="20px"
        flexDirection="column"
        w="100%"
        pos="relative"
        borderRadius="20px"
        minW="0px"
        bg="#ffffff"
        backgroundClip="border-box"
      >
        <Text
          color="secondaryGray.900"
          fontWeight="bold"
          fontSize="2xl"
          mt="10px"
          mb="20px"
        >
          Etat des projets
        </Text>
        {projets.map((projet) => (
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Image
              h="80px"
              w="80px"
              src={imageProjet}
              borderRadius="8px"
              me="20px"
            />
            <Box mt={{ base: "10px", md: "0" }} align="left">
              <Text
                color="secondaryGray.900"
                fontWeight="500"
                fontSize="md"
                mb="4px"
              >
                {projet.title}
              </Text>
              <Text fontWeight="500" color="gray.400" fontSize="sm" me="4px">
                {projet.description}
              </Text>
              <Link
                fontWeight="500"
                color="brand.500"
                href={`/accueil/${userId}/projet/${projet.id}`}
                fontSize="sm"
              >
                Voir le projet
              </Link>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
