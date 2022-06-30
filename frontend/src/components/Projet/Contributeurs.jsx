import {
  Avatar,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Contributeurs() {
  const [contributors, setContributors] = useState();

  const { userId, projectId } = useParams();

  const getAllCollaborators = () => {
    axios
      .get(`http://localhost:5001/api/projects/${projectId}/participations/`)
      .then((response) => {
        setContributors(response.data);
      });
  };

  useEffect(() => getAllCollaborators(), []);

  return (
    <Flex
      direction="column"
      w="100%"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex
        align={{ sm: "flex-start", lg: "center" }}
        justify="space-between"
        w="100%"
        px="22px"
        pb="20px"
        mb="10px"
        boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
      >
        <Text fontSize="2xl" fontWeight="600" color="navy.700">
          Contributeurs du projet
        </Text>
      </Flex>
      <Table variant="simple" color="gray.500">
        <Thead>
          <Tr>
            <Th pe="10px" borderColor="transparent">
              <Text fontSize="md" color="gray.400">
                Nom Prénom
              </Text>
            </Th>
            <Th pe="10px" borderColor="transparent">
              <Text fontSize="md" color="gray.400">
                Job
              </Text>
            </Th>
            <Th pe="10px" borderColor="transparent">
              <Text fontSize="md" color="gray.400">
                Agence
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {contributors &&
            contributors.map((contributor) => (
              <Tr key={contributor.fk_participation_user_project_userId.id}>
                <Td>
                  <Flex
                    align="left"
                    justifyContent="space-around"
                    w="fit-content"
                    alignItems="center"
                  >
                    {parseInt(userId, 10) === contributor.userId ? (
                      <StarIcon w={7} h={7} color="navy.500" mr="0.5rem" />
                    ) : (
                      <StarIcon w={7} h={7} color="white" mr="0.5rem" />
                    )}
                    <Avatar
                      src={
                        contributor.fk_participation_user_project_userId.picture
                      }
                      w="45px"
                      h="45px"
                      me="8px"
                    />
                    <Flex gap="2" alignItems="center">
                      <Text fontSize="md" fontWeight="600">
                        {
                          contributor.fk_participation_user_project_userId
                            .firstname
                        }
                      </Text>
                      <Text fontSize="md" fontWeight="600">
                        {
                          contributor.fk_participation_user_project_userId
                            .lastname
                        }
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Text fontSize="md" fontWeight="500">
                    {contributor.fk_participation_user_project_userId.jobPost}
                  </Text>
                </Td>
                <Td>
                  <Text fontSize="md" fontWeight="500">
                    {contributor.fk_participation_user_project_userId.agency}
                  </Text>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Flex>
  );
}
