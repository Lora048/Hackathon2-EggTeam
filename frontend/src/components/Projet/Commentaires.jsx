import { Flex, Text, useColorModeValue, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../Accueil/Card";

export default function Commentaires() {
  const [comments, setComments] = useState([]);
  const { projectId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/users/1/projects/${projectId}/comments`)
      .then((res) => setComments(res.data));
  }, []);

  // useEffect(() => {
  //   axios
  //     .post(`http://localhost:5001/api/users/1/projects/${projectId}/comments`)
  //     .then((res) => setPostComment(res.data));
  // }, []);

  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.500";

  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.35)",
    "unset"
  );

  return (
    <Flex>
      <Flex p="2rem" flexDir="column" w="100%" gap="4">
        <Flex justify="space-between">
          <Text color={textColorPrimary} fontSize="2xl" align="left" mb="2rem">
            Commentaires
          </Text>
          <Button
            color="white"
            bgGradient="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
            w="30%"
            type="button"
          >
            Ajouter un commentaire
          </Button>
        </Flex>
        {comments &&
          comments
            .filter(
              (comment) => comment.fk_comments_userId.projectId === projectId
            )
            .map((comment) => (
              <Flex>
                <Card
                  display="flex"
                  direction="row"
                  mb="5rem"
                  color={textColorSecondary}
                  boxShadow={cardShadow}
                  w="50%"
                  key={comment.id}
                >
                  {" "}
                  <Flex color="gray.700" mb="0.5rem">
                    {comment.fk_comments_userId.picture}
                    {comment.fk_comments_userId.firstname}{" "}
                    {comment.fk_comments_userId.lastname}
                  </Flex>
                  <Flex>{comment.content}</Flex>
                </Card>

                {comment.comments_reply &&
                  comment.comments_reply.map((rep) => (
                    <Flex w="50%">
                      <Card
                        color={textColorSecondary}
                        boxShadow={cardShadow}
                        alignItems="end"
                        mt="5rem"
                        key={rep.id}
                      >
                        <Flex color="gray.700" mb="0.5rem">
                          Marcel Durand
                        </Flex>
                        <Flex>{rep.content}</Flex>
                      </Card>
                    </Flex>
                  ))}
              </Flex>
            ))}
      </Flex>
    </Flex>
  );
}
