import { Flex, Text } from "@chakra-ui/react";
import { ReactTinyLink } from "react-tiny-link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Commentaires() {
  const [contents, setContents] = useState([]);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/users/1/projects/1/comments")
      .then((res) => setContents(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5001/api/users/1/projects/1/comments/${contents.id}/reply`
      )
      .then((res) => setReplies(res.data));
  }, []);

  return (
    <Flex>
      <Flex p="2rem" flexDir="column" w="100%" gap="4">
        <Text fontSize="2xl" align="left">
          Backlog du projet
        </Text>
        <ReactTinyLink
          cardSize="large"
          showGraphic
          maxLine={2}
          minLine={1}
          url="https://www.figma.com/file/KTFPuhOkABSq8lPWepVlqh/Hackathon2-x-EggTeam?node-id=34%3A6"
        />
        {contents &&
          contents.map(
            (content) =>
              <Flex key={content.id}>{content.content}</Flex> &&
              replies.map((reply) => (
                <Flex key={reply.id}>{reply.content}</Flex>
              ))
          )}
      </Flex>
    </Flex>
  );
}
