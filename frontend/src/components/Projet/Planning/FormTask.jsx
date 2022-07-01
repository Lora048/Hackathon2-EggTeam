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
  CloseButton,
  Textarea,
  Text,
  useToast,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function FormTask({ onClose }) {
  const toast = useToast();
  const { userId, projectId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const [dueDate, setDueDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  //   const handleDueDate = (e) => {
  //     setDueDate(e.target.value);
  //   };
  //   const handleStartDate = (e) => {
  //     setSelectedDay(e.target.value);
  //   };

  const postTask = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5001/api/users/${userId}/projects/${projectId}/tasks`,
        {
          userId: parseInt(userId, 10),
          projectId: parseInt(projectId, 10),
          title,
          description,
          status,
          startDate,
          dueDate,
        }
      )
      .then((res) => {
        console.warn(res);
        toast({
          title: "Votre projet a bien été ajouté",
          status: "success",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        });
      })
      .catch(() =>
        toast({
          title: "Votre projet n'a pas pû être ajouté",
          status: "error",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        })
      );
    onClose();
  };

  return (
    <FormControl isRequired>
      <Box bgSize="cover">
        <Container py={{ base: 5, sm: 10, lg: 15 }} z-index="10" h="auto">
          <Stack
            bg="none"
            rounded="xl"
            p={{ base: 4, sm: 6, md: 5 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "2xl" }}
          >
            <CloseButton color="brand.500" alignSelf="end" />
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
                    <Textarea
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
                    <Flex>
                      <Text
                        w="80"
                        h="30"
                        bg="gray.100"
                        border={0}
                        color="gray.500"
                        pt="auto"
                        pb="auto"
                      >
                        Date de début
                      </Text>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </Flex>
                    <Flex>
                      <Text
                        w="80"
                        h="30"
                        bg="gray.100"
                        border={0}
                        color="gray.500"
                        pt="auto"
                        pb="auto"
                      >
                        Date de fin
                      </Text>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={dueDate}
                        onChange={(date) => setDueDate(date)}
                      />
                    </Flex>
                  </Stack>
                </Flex>
              </Stack>
            </Box>
          </Stack>
          <Button
            mt={8}
            type="button"
            w="full"
            bgGradient="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, 135deg, #868CFF 0%, #4318FF 100%)",
              boxShadow: "xl",
            }}
            onClick={postTask}
          >
            Enregistrer
          </Button>
        </Container>
      </Box>
    </FormControl>
  );
}

export default FormTask;
