import { Flex, Button, Input, Box, Text, Tag, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PNG from "../../assets/PNG.png";
import Card from "../Accueil/Card";

export default function Documents() {
  const { projectId } = useParams();

  const [documents, setDocuments] = useState([]);
  const getDocuments = () => {
    axios
      .get(`http://localhost:5001/api/projects/${projectId}/documents`)
      .then((response) => {
        setDocuments(response.data);
      });
  };

  useEffect(() => getDocuments(), []);

  return (
    <Flex>
      <Flex p="2rem" flexDir="column" w="100%" gap="4" alignItems="center">
        <Flex gap="100px">
          {documents.map((doc) => (
            <Card
              p="20px"
              boxShadow="14px 17px 40px 4px rgb(112 144 176 / 18%)"
            >
              <Flex
                direction={{ base: "column" }}
                justify="center"
                alignItems="center"
              >
                <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
                  <Image
                    h="200px"
                    position="center"
                    src={
                      doc.url.split(".")[doc.url.split(".").length - 1] !==
                      "pdf"
                        ? `${doc.url}`
                        : PNG
                    }
                    borderRadius="20px"
                  />
                </Box>
                <Flex
                  flexDirection="column"
                  justify="space-between"
                  h="100%"
                  alignItems="center"
                >
                  <Flex
                    justify="space-between"
                    gap="10px"
                    direction={{
                      base: "row",
                      md: "column",
                      lg: "row",
                      xl: "column",
                      "2xl": "row",
                    }}
                    mb="auto"
                  >
                    <Flex direction="column" alignItems="center">
                      <a href={doc.url} target="blank">
                        <Text
                          fontSize={{
                            base: "xl",
                            md: "lg",
                            lg: "lg",
                            xl: "lg",
                            "2xl": "md",
                            "3xl": "lg",
                          }}
                          mb="5px"
                          fontWeight="bold"
                          textAlign="center"
                          noOfLines={1}
                        >
                          {doc.name}
                        </Text>
                      </a>
                    </Flex>
                  </Flex>

                  <Flex gap="5px">
                    <Tag size="sm" variant="solid">
                      {doc.type}
                    </Tag>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
        <Button
          type="file"
          align="center"
          fontSize="md"
          w="200px"
          variant="brand"
          onClick={() => document.getElementById("inputHandler").click()}
        >
          <Input type="file" id="inputHandler" name="name" display="none" />{" "}
          Uploader un document
        </Button>
      </Flex>
    </Flex>
  );
}
