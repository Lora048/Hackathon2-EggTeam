import { Flex, Text, Button, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HeadProject() {
  const { userId, projectId } = useParams();
  const toast = useToast();

  const [isCollaborator, setIsCollaborator] = useState();
  const [projet, setProjet] = useState([]);

  const getProject = () => {
    axios
      .get(`http://localhost:5001/api/projects/${projectId}`)
      .then((response) => {
        setProjet(response.data.currentProject);
      });
  };

  const getParticipation = () => {
    axios
      .get(
        `http://localhost:5001/api/users/${userId}/projects/${projectId}/participations/`
      )
      .then((response) => {
        if (response.data.length > 0) {
          setIsCollaborator(true);
        } else {
          setIsCollaborator(false);
        }
      });
  };

  useEffect(() => {
    getParticipation();
  }, [projectId]);
  useEffect(() => {
    getProject();
  }, [projectId]);

  const rejoinProject = () => {
    axios
      .post(
        `http://localhost:5001/api/users/${userId}/projects/${projectId}/participations/`,
        userId,
        projectId
      )
      .then((response) => {
        if (response) {
          toast({
            title: "Bienvenue",
            description: "Vous faites maintenant partie du projet !",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
        setIsCollaborator(!isCollaborator);
      });
  };
  const leaveProject = () => {
    axios
      .delete(
        `http://localhost:5001/api/users/${userId}/projects/${projectId}/participations/`,
        userId,
        projectId
      )
      .then((response) => {
        if (response) {
          toast({
            title: "Au revoir",
            description: "Vous venez de quitter le projet !",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
        setIsCollaborator(!isCollaborator);
      });
  };
  return (
    <Flex justifyContent="space-between" pl="1rem">
      <Text
        fontSize="34px"
        fontWeight="bold"
        color="navy.700"
        maxW="70%"
        align="left"
      >
        {projet.title}
      </Text>
      {!isCollaborator ? (
        <Button
          variant="darkBrand"
          alignSelf="center"
          mr="2rem"
          onClick={rejoinProject}
        >
          Rejoindre le projet
        </Button>
      ) : (
        <Button
          variant="darkBrand"
          alignSelf="center"
          mr="2rem"
          onClick={leaveProject}
        >
          Quitter le projet
        </Button>
      )}
    </Flex>
  );
}
