import {
  Flex,
  Text,
  useColorModeValue,
  Button,
  FormControl,
  Input,
  Avatar,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../Accueil/Card";

export default function Commentaires() {
  const [comments, setComments] = useState([]);
  const [openAddComment, setOpenAddComment] = useState(false);
  const [content, setContent] = useState("");
  const [openAddReply, setOpenAddReply] = useState(false);
  // const [reply, setReply] = useState("");

  const { projectId, userId, commentsId } = useParams();
  const toast = useToast();
  useEffect(() => {
    axios
      .get(
        `http://localhost:5001/api/users/${userId}/projects/${projectId}/comments`
      )
      .then((res) => setComments(res.data));
  }, [comments]);

  const addComment = () => {
    axios
      .post(
        `http://localhost:5001/api/users/${userId}/projects/${projectId}/comments/`,
        { content }
      )
      .then((response) => {
        if (response) {
          toast({
            title: "Commentaire posté !",
            status: "success",
            duration: 7000,
            position: "bottom-right",
            isClosable: true,
          });
        }
      });
    setOpenAddComment(!openAddComment);
  };

  const deleteComment = () => {
    axios.delete(
      `http://localhost:5001/api/users/${userId}/projects/${projectId}/comments/${commentsId}`
    );
  };

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
            onClick={() => setOpenAddComment(!openAddComment)}
          >
            Ajouter un commentaire
          </Button>
        </Flex>{" "}
        {openAddComment && (
          <FormControl>
            <Input
              id="content"
              placeholder="Ajoute un commentaire"
              onChange={(e) => setContent(e.target.value)}
            />
            <Button
              color="white"
              bgGradient="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
              w="30%"
              type="button"
              onClick={addComment}
            >
              Envoyer un commentaire
            </Button>
          </FormControl>
        )}
        {comments &&
          comments.map((comment) => (
            <Flex gap="50px">
              <Card
                key={comment.content}
                display="flex"
                direction="row"
                mb="5rem"
                color={textColorSecondary}
                bg="white"
                boxShadow={cardShadow}
                w="50%"
              >
                {" "}
                <Flex color="gray.700" mb="0.5rem" alignItems="center">
                  <Avatar
                    name={comment.fk_comments_userId.firstname}
                    w="45px"
                    h="45px"
                    me="8px"
                  />
                  {comment.fk_comments_userId.firstname}{" "}
                  {comment.fk_comments_userId.lastname}
                </Flex>
                <Flex>{comment.content}</Flex>
                <Flex direction="end" alignItems="end">
                  <Spacer /> <DeleteIcon mr="0.5rem" onClick={deleteComment} />{" "}
                  <EditIcon onClick={() => setOpenAddReply(!openAddReply)} />
                </Flex>
              </Card>
              {openAddReply && (
                <Card
                  boxShadow={cardShadow}
                  bg="blue.50"
                  alignItems="end"
                  mt="5rem"
                  w="50%"
                >
                  <FormControl paddingTop="14rem" w="50%">
                    <Input
                      id="content"
                      placeholder="Ajoute un commentaire"
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <Button
                      color="white"
                      bgGradient="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
                      w="30%"
                      type="button"
                      onClick={addComment}
                    >
                      Envoyer un commentaire
                    </Button>
                  </FormControl>{" "}
                </Card>
              )}
              <Flex direction="column" w="50%" gap="20px" mt="30px">
                {comment.comments_reply &&
                  comment.comments_reply.map((rep) => (
                    <Flex key={rep.id}>
                      <Card
                        boxShadow={cardShadow}
                        bg="blue.50"
                        alignItems="end"
                      >
                        <Flex
                          color={textColorSecondary}
                          mb="0.5rem"
                          alignItems="center"
                          gap="10px"
                        >
                          <Avatar
                            name={rep.fk_comments_reply_userId.firstname}
                            w="45px"
                            h="45px"
                            me="8px"
                          />
                          <Text>{`${rep.fk_comments_reply_userId.firstname} ${rep.fk_comments_reply_userId.lastname}`}</Text>
                          <Flex>{rep.content}</Flex>
                          <Flex>
                            <DeleteIcon mr="0.5rem" />
                          </Flex>
                        </Flex>
                      </Card>
                    </Flex>
                  ))}
              </Flex>
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}
