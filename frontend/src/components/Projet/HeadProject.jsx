import { Flex, Text, Button, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HeadProject() {
  const { userId, projectId } = useParams();
  const toast = useToast();

  const [isCollaborator, setIsCollaborator] = useState(false);
  const [projet, setProjet] = useState([]);

  const getProject = () => {
    axios
      .get(`http://localhost:5001/api/projects/${projectId}`)
      .then((response) => {
        setProjet(response.data.currentProject);
      });
  };

  useEffect(() => getProject(), []);

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
            description: "Vous venez de quittez le projet !",
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
      {isCollaborator ? (
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
          Quittez le projet
        </Button>
      )}
    </Flex>
  );
}
