import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Accueil/Sidebar/Sidebar";
import Banner from "../components/Profil/Banner";
import Projects from "../components/Profil/Projects";
import GeneralInfos from "../components/Profil/GeneralInfos";

export default function Profil() {
  const { userId } = useParams();
  return (
    <Flex>
      <Flex
        minW={{ base: "100%", lg: "15%" }}
        minH="20vh"
        gap="20px"
        flexDir="column"
      >
        <Sidebar user={userId} />
      </Flex>
      <Flex flexDir="column" w="100%" gap="3">
        <Banner />
        <Flex justifyContent="space-around">
          <Projects />
          <GeneralInfos />
        </Flex>
      </Flex>
    </Flex>
  );
}
