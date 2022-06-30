import { Flex, Box, Text } from "@chakra-ui/react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function Contributeurs() {
  return (
    <Flex p="2rem" flexDir="column" w="100%" gap="4">
      <Text fontSize="2xl" align="left">
        Planning du projet
      </Text>
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
