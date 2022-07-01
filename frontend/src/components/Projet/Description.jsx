/* eslint-disable no-return-assign */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/prop-types */
import {
  Flex,
  Text,
  Box,
  AvatarGroup,
  Avatar,
  Tag,
  Divider,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Tiptap from "./Tiptap";
import "./description.css";
// eslint-disable-next-line react/prop-types
export default function Description({ project }) {
  if (!project) {
    return null;
  }
  const { userId, projectId, id } = useParams();
  const toast = useToast();
  // const [voteByUserAndProject, setVoteByUserAndProject] = useState([]);

  const handleRating = () => {
    axios
      .post(
        `http://localhost:5001/api/users/${userId}/projects/${projectId}/votes`,
        {
          type: "positif",
        }
      )
      .then(() => {
        toast({
          title: "Votre vote a été pris en compte",
          status: "success",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        });
      });
  };

  const handleUnrating = () => {
    axios.post(`http://localhost:5001/api/vote/${id}`).then(() => {
      toast({
        title: "Votre vote a été supprimé",
        status: "failure",
        position: "bottom-right",
        duration: 7000,
        isClosable: true,
      });
    });
  };

  // console.log(project)

  // useEffect(() => {
  //   handleRating();
  // }, []);

  // console.log(project.votes.length);
  return (
    <Flex flexDir="column">
      <Flex p="2rem" py="1rem" flexDir="column" w="100%">
        <Flex my="2rem" flexDir="row" gap="4">
          <Box
            bgImage={project.cover}
            h="250px"
            w="100%"
            borderRadius="md"
            bgSize="cover"
          />
        </Flex>
        <Flex alignItems="center" justify="space-between" w>
          <Text fontSize="lg" align="left" color="brand.500" fontWeight="700">
            Détails du projet
          </Text>
          <Flex alignItems="center" justify="flex-end" w="10vw" gap="20px">
            <Text fontSize="sm" align="left" color="gray.500">
              Créé par{" "}
            </Text>
            <Avatar
              name={`${project.fk_project_userId.firstname} ${project.fk_project_userId.lastname} `}
            />
          </Flex>
        </Flex>
        <Flex w="100%" my="1rem" flexDir="column" gap="4" text-align="left">
          <td
            className="textDescription"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </Flex>
        <Divider my="30px" />

        <Flex gap="100px" alignItems="top">
          <Flex direction="column">
            <Text
              fontSize="lg"
              align="left"
              color="brand.500"
              fontWeight="700"
              mb="10px"
            >
              {`Participant.e.s (${project.participation_user_project.length})`}
            </Text>
            <AvatarGroup size="md" max={3} mb="30px">
              {project.participation_user_project.length > 0 &&
                project.participation_user_project.map((participant) => (
                  <Avatar
                    name={
                      participant.fk_participation_user_project_userId.firstname
                    }
                  />
                ))}
            </AvatarGroup>
          </Flex>
          <Flex direction="column">
            <Text
              fontSize="lg"
              align="left"
              color="brand.500"
              fontWeight="700"
              mb="10px"
            >
              Statut
            </Text>
            <Tag bgColor="pink.500" color="white">
              {project.status}
            </Tag>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Flex direction="column" align="center" justify="center">
              <Text
                fontSize="lg"
                align="left"
                color="brand.500"
                fontWeight="700"
                mb="10px"
              >
                Votes
              </Text>

              <Text
                fontSize="lg"
                align="left"
                color="brand.500"
                fontWeight="500"
                mb="10px"
              >
                {project.votes.length}
              </Text>
            </Flex>
            {!project.type ? (
              <Button onClick={handleRating} variant="lightBrand">
                Voter
              </Button>
            ) : (
              <Button onClick={handleUnrating} variant="lightBrand">
                Supprimer mon vote
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
