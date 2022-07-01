/* eslint-disable react/prop-types */
import {
  Flex,
  Box,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import { useState, useEffect } from "react";

// import axios from "axios";
// import Card from "../../Accueil/Card";
import events from "./events";
import FormTask from "./FormTask";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// eslint-disable-next-line react/prop-types
export default function Planning({ project }) {
  if (!project) {
    return null;
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [taskList, setTaskList] = useState([]);

  return (
    <Flex p="2rem" flexDir="column" w="100%" gap="4">
      <Flex justifyContent="space-between" pb="4" pl="1em" pr="1em">
        <Text fontSize="2xl" align="left">
          Planning du projet
        </Text>
        <Button
          color="brand.500"
          variant="outline"
          borderColor="brand.500"
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          w="60"
          borderRadius="2xl"
          _hover={{
            borderColor: "white",
            color: "white",
            bgGradient: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
          }}
          onClick={onOpen}
        >
          <AddIcon pr={2} />
          Planifier une tâche
        </Button>
        <Modal
          motionPreset="slideInBottom"
          isCentered
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          size="4xl"
        >
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent>
            <ModalBody textAlign="center">
              <FormTask onClose={onClose} isOpen={isOpen} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
      <Box style={{ height: 500 }} m="1rem">
        <Calendar
          defaultView="month"
          localizer={localizer}
          events={events}
          step={60}
          defaultDate={new Date()}
          eventPropGetter={(event, start, end, isSelected) => ({
            event,
            start,
            end,
            isSelected,
            style: { backgroundColor: "#11047A" },
          })}
        />
      </Box>
      {project.task.map((task) => (
        <Box>
          <Text>{task.title}</Text>
        </Box>
      ))}
    </Flex>
  );
}
