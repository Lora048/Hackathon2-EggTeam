import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import Description from "./Description";
import Taches from "./Outils";
import Contributeurs from "./Contributeurs";
import Planning from "./Planning/Planning";
import Commentaires from "./Commentaires";
import Documents from "./Documents";

// eslint-disable-next-line react/prop-types
export default function ButtonGroupProjetNavigation({ project }) {
  return (
    <Tabs variant="solid-rounded" isFitted w="100%" m="0 auto" marginTop="1rem">
      <TabList
        borderColor="#313D4D"
        variant="solid-rounded"
        p={1}
        _focus={{
          borderColor: "teal",
        }}
      >
        <Tab
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          borderRadius="2xl"
          _selected={{
            color: "white",
            bgGradient: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
          }}
          isFitted
        >
          Description
        </Tab>
        <Tab
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          borderRadius="2xl"
          _selected={{
            color: "white",
            bgGradient: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
          }}
        >
          Outils
        </Tab>
        <Tab
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          borderRadius="2xl"
          _selected={{
            color: "white",
            bgGradient: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
          }}
        >
          Contributeurs
        </Tab>
        <Tab
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          borderRadius="2xl"
          _selected={{
            color: "white",
            bgGradient: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
          }}
        >
          Planning
        </Tab>
        <Tab
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          borderRadius="2xl"
          _selected={{
            color: "white",
            bgGradient: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
          }}
        >
          Commentaires
        </Tab>
        <Tab
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          borderRadius="2xl"
          _selected={{
            color: "white",
            bgGradient: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
          }}
        >
          Documents
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <Description project={project} />
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <Taches />
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <Contributeurs project={project} />
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <Planning project={project} />
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <Commentaires />
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <Documents />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
