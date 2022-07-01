import { Flex, Text, SimpleGrid, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function GeneralInfos() {
  const colors = {
    Typescript: "brand.400",
    Github: "blue.200",
    Javascript: "brand.300",
    NodeJS: "navy.500",
    Java: "gray.300",
    Express: "gray.500",
    Docker: "brand.600",
    Figma: "blue.400",
    "Suite Adobe": "brand.300",
    React: "purple.300",
    Angular: "purple.400",
    VueJS: "pink.500",
    "C++": "blue.200",
    PHP: "pink.700",
    "React Native": "brand.500",
    flutter: "purple.600",
    Dart: "blue.700",
  };

  const [userDescription, setUserDescription] = useState();

  const { userId } = useParams();

  const getUserDescription = () => {
    axios.get(`http://localhost:5001/api/users/${userId}`).then((response) => {
      setUserDescription(response.data.currentUser);
    });
  };

  useEffect(() => getUserDescription(), []);
  return (
    <Flex flexDirection="column" w="45%">
      <Flex
        p="20px"
        flexDirection="column"
        w="100%"
        pos="relative"
        borderRadius="20px"
        minW="0px"
        bg="#ffffff"
        backgroundClip="border-box"
      >
        <Text
          color="secondaryGray.900"
          fontWeight="bold"
          fontSize="2xl"
          mt="10px"
          mb="4px"
          align="left"
        >
          General Information
        </Text>
        <Text color="gray.400" fontSize="md" me="26px" mb="20px" align="left">
          As we live, our hearts turn colder. Cause pain is what we go through
          as we become older. We get insulted by others, lose trust for those
          others. We get back stabbed by friends. It becomes harder for us to
          give others a hand. We get our heart broken by people we love, even
          that we give them all...
        </Text>
        <SimpleGrid columns="2" gap="10px">
          <Flex
            p="20px"
            flexDirection="column"
            w="100%"
            pos="relative"
            borderRadius="20px"
            minW="0px"
            bg="#ffffff"
            backgroundClip="border-box"
            boxShadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
            gap="2"
          >
            <Text fontWeight="500" color="gray.400" fontSize="sm" align="left">
              Hard Skills
            </Text>
            <Flex gap="5px">
              {userDescription &&
                userDescription.hardSkills.map((skill) => (
                  <Tag size="sm" bgColor={colors[skill]} color="white">
                    {skill}
                  </Tag>
                ))}
            </Flex>
          </Flex>
          <Flex
            p="20px"
            flexDirection="column"
            w="100%"
            pos="relative"
            borderRadius="20px"
            minW="0px"
            bg="#ffffff"
            backgroundClip="border-box"
            boxShadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
            gap="2"
          >
            <Text fontWeight="500" color="gray.400" fontSize="sm" align="left">
              Languages
            </Text>
            <Text
              color="secondaryGray.900"
              align="left"
              fontWeight="500"
              fontSize="md"
            >
              English, Spanish, Italian
            </Text>
          </Flex>
          <Flex
            p="20px"
            flexDirection="column"
            w="100%"
            pos="relative"
            borderRadius="20px"
            minW="0px"
            bg="#ffffff"
            backgroundClip="border-box"
            boxShadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
            gap="2"
          >
            <Text fontWeight="500" color="gray.400" fontSize="sm" align="left">
              Department
            </Text>
            <Text
              color="secondaryGray.900"
              align="left"
              fontWeight="500"
              fontSize="md"
            >
              Innovation
            </Text>
          </Flex>
          <Flex
            p="20px"
            flexDirection="column"
            w="100%"
            pos="relative"
            borderRadius="20px"
            minW="0px"
            bg="#ffffff"
            backgroundClip="border-box"
            boxShadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
            gap="2"
          >
            <Text fontWeight="500" color="gray.400" fontSize="sm" align="left">
              Work History
            </Text>
            <Text
              color="secondaryGray.900"
              align="left"
              fontWeight="500"
              fontSize="md"
            >
              Google, Facebook
            </Text>
          </Flex>
          <Flex
            p="20px"
            flexDirection="column"
            w="100%"
            pos="relative"
            borderRadius="20px"
            minW="0px"
            bg="#ffffff"
            backgroundClip="border-box"
            boxShadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
            gap="2"
          >
            <Text fontWeight="500" color="gray.400" fontSize="sm" align="left">
              Organization
            </Text>
            <Text
              color="secondaryGray.900"
              align="left"
              fontWeight="500"
              fontSize="md"
            >
              Apside
            </Text>
          </Flex>
          <Flex
            p="20px"
            flexDirection="column"
            w="100%"
            pos="relative"
            borderRadius="20px"
            minW="0px"
            bg="#ffffff"
            backgroundClip="border-box"
            boxShadow="rgba(112, 144, 176, 0.12) 0px 18px 40px"
            gap="2"
          >
            <Text fontWeight="500" color="gray.400" fontSize="sm" align="left">
              Birthday
            </Text>
            <Text
              color="secondaryGray.900"
              align="left"
              fontWeight="500"
              fontSize="md"
            >
              20 July 1986
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
