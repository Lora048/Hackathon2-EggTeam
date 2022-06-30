import {
  Input,
  Stack,
  Button,
  Flex,
  Container,
  Box,
  FormControl,
  Select,
  Heading,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function FormTask() {
  const { userId, projectId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleDueDate = (e) => {
    setDueDate(e.target.value);
  };

  const postTask = (e) => {
    e.preventDefault();
    axios.post(
      `http://localhost:5001/api/users/:${userId}/projects/:${projectId}/tasks`,
      {
        title,
        description,
        status,
        startDate,
        dueDate,
      }
    );
  };

  return (
    <FormControl isRequired onSubmit={postTask}>
      <Box bgSize="cover">
        <Container py={{ base: 5, sm: 10, lg: 15 }} z-index="10" h="auto">
          <Stack
            bg="none"
            rounded="xl"
            p={{ base: 4, sm: 6, md: 5 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "2xl" }}
          >
            <Stack spacing={2}>
              <Heading alignSelf="center" color="brand.500" lineHeight={1.1}>
                Créer une nouvelle tâche :
              </Heading>
            </Stack>
            <Box as="form" mt={10}>
              <Stack spacing={2}>
                <Flex direction="column" justify="20px">
                  <Stack spacing={4}>
                    <Input
                      placeholder="Nom de la tâche"
                      bg="gray.100"
                      border={0}
                      color="gray.500"
                      _placeholder={{
                        color: "gray.500",
                      }}
                      mr="1rem"
                      onChange={handleTitle}
                    />
                    <Input
                      placeholder="Description de la tâche"
                      bg="gray.100"
                      border={0}
                      color="gray.500"
                      _placeholder={{
                        color: "gray.500",
                      }}
                      onChange={handleDescription}
                    />
                    <Select
                      name="Statut"
                      bg="gray.100"
                      border={0}
                      color="gray.500"
                      _placeholder={{
                        color: "gray.500",
                      }}
                      onChange={handleStatus}
                      mr="1rem"
                    >
                      <option value="" disabled selected>
                        Statut
                      </option>
                      <option value="Backlog">Backlog</option>
                      <option value="Programmée">Programmée</option>
                      <option value="En cours">En cours</option>
                      <option value="Terminée">Terminée</option>
                    </Select>
                    <Input
                      placeholder="Date de début"
                      bg="gray.100"
                      border={0}
                      color="gray.500"
                      _placeholder={{
                        color: "gray.500",
                      }}
                      onChange={handleStartDate}
                    />
                    <Input
                      placeholder="Date de fin"
                      bg="gray.100"
                      border={0}
                      color="gray.500"
                      _placeholder={{
                        color: "gray.500",
                      }}
                      onChange={handleDueDate}
                    />
                  </Stack>
                </Flex>
              </Stack>
            </Box>
          </Stack>
          <Button
            mt={8}
            type="submit"
            w="full"
            bgGradient="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, 135deg, #868CFF 0%, #4318FF 100%)",
              boxShadow: "xl",
            }}
          >
            Enregistrer
          </Button>
        </Container>
      </Box>
    </FormControl>
  );
}

export default FormTask;
