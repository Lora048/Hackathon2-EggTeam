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
} from "@chakra-ui/react";
// import Tiptap from "./Tiptap";
import "./description.css";
// eslint-disable-next-line react/prop-types
export default function Description({ project }) {
  if (!project) {
    return null;
  }
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

        <Flex gap="100px">
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
        </Flex>
      </Flex>
    </Flex>
  );
}
