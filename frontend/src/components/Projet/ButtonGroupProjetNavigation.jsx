import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import Description from "./Description";
import Taches from "./Taches";

export default function ButtonGroupProjetNavigation() {
  return (
    <Tabs
      variant="solid-rounded"
      colorScheme="red"
      isFitted
      w="100%"
      m="0 auto"
      marginTop="1rem"
    >
      <TabList
        borderColor="#313D4D"
        variant="solid-rounded"
        p={1}
        _focus={{
          borderColor: "teal",
        }}
      >
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }} borderRadius="2xl">
          Description
        </Tab>
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }} borderRadius="2xl">
          Tâches
        </Tab>
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }} borderRadius="2xl">
          Contributeurs
        </Tab>
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }} borderRadius="2xl">
          Planning
        </Tab>
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }} borderRadius="2xl">
          Commentaires
        </Tab>
        <Tab fontSize={{ base: "sm", sm: "md", md: "xl" }} borderRadius="2xl">
          Documents
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <Description />
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          <Taches />
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          {/* <CardReviewCarousel movie={movie} /> */}
        </TabPanel>
        <TabPanel mt={{ base: "0.5rem", sm: "1rem", md: "2rem" }} p="0">
          {/* <MovieVideoCarousel movie={movie} /> */}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
