/* eslint-disable react/jsx-props-no-spreading */
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ButtonGroupProjetNavigation from "../components/Projet/ButtonGroupProjetNavigation";
import Sidebar from "../components/Accueil/Sidebar/Sidebar";
import HeadProject from "../components/Projet/HeadProject";

export default function Projet() {
  const { userId } = useParams();
  const { projectId } = useParams();
  const [projet, setProjet] = useState();

  const getProject = () => {
    axios
      .get(`http://localhost:5001/api/projects/${projectId}`)
      .then((response) => {
        setProjet(response.data.currentProject);
      });
  };

  useEffect(() => {
    getProject();
  }, [projectId, projet]);

  return (
    <Flex>
      <Flex
        minW={{ base: "100%", lg: "15%" }}
        minH="20vh"
        gap="20px"
        flexDir="column"
      >
        <Sidebar user={userId} />
      </Flex>
      <Flex p="2rem" flexDir="column" w="80%" h="100vh">
        <Flex
          flexDir="column"
          w="100%"
          p="20px"
          borderRadius="20px"
          bgColor="rgb(255, 255, 255)"
          gap="5"
        >
          <HeadProject />
          <ButtonGroupProjetNavigation project={projet} />
        </Flex>
      </Flex>
    </Flex>
  );
}
