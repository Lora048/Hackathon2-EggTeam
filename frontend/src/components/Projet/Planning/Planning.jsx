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
import FormTask from "./FormTask";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function Contributeurs() {
  const modalTask = useDisclosure();

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
          onClick={() => {
            modalTask.onOpen();
          }}
        >
          <AddIcon pr={2} />
          Planifier une tâche
        </Button>
        <Modal
          motionPreset="slideInBottom"
          isCentered
          isOpen={modalTask.isOpen}
          onClose={modalTask.onClose}
          size="4xl"
        >
          <ModalOverlay backdropFilter="blur(10px)" />
          <ModalContent>
            <ModalBody textAlign="center">
              <FormTask />
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
    </Flex>
  );
}
