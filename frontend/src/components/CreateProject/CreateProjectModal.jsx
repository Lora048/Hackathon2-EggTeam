/* eslint-disable react/prop-types */
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  useToast,
  Input,
  Stack,
  Flex,
  Container,
  Box,
  FormControl,
  Select,
  Heading,
} from "@chakra-ui/react";
import Highlight from "@tiptap/extension-highlight";
import "./TextEditorColl/styles.scss";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import MenuBar from "./TextEditorColl/MenuBar";
import imageProjet from "../../assets/Nft3.png";

export default function CreateProjectModal({ isOpen, onClose, user }) {
  const toast = useToast();
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
    ],
  });

  const [title, setTitle] = useState("");
  const [cover, SetCover] = useState("");
  const [status, setStatus] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCover = () => {
    SetCover(imageProjet);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const html = editor.getHTML();
    axios
      .post(`http://localhost:5001/api/users/${user}/projects`, {
        title,
        description: `${html}`,
        cover,
        status,
      })
      .then((res) => {
        console.warn(res);
        toast({
          title: "Votre projet a bien été ajouté",
          status: "success",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        });
      })
      .catch(() =>
        toast({
          title: "Votre projet n'a pas pû être ajouté",
          status: "error",
          position: "bottom-right",
          duration: 7000,
          isClosable: true,
        })
      );
    onClose();
    SetCover("");
    setStatus("");
    setTitle("");
    editor.commands.setContent(`<p>Example Text</p>`);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Nouveau Projet</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxW="100%">
          <FormControl isRequired>
            <Box>
              <Flex>
                <Container>
                  {cover ? (
                    <Box
                      h="250px"
                      borderRadius="md"
                      bgImage={cover}
                      bgSize="cover"
                      repeat="no-repeat"
                    />
                  ) : (
                    <Flex
                      h="250px"
                      borderRadius="md"
                      bgColor="gray.200"
                      alignItems="center"
                      justify="center"
                    >
                      <Button variant="action" onClick={handleCover}>
                        Ajouter une Photo de couverture
                      </Button>
                    </Flex>
                  )}
                  <Stack rounded="xl" spacing={{ base: 8 }} pt="20px">
                    {" "}
                    <Stack spacing={4}>
                      <Heading>
                        {title || "Proposer un nouveau projet"}{" "}
                      </Heading>
                    </Stack>
                    <Box as="form" mt={10} onSubmit={handleSubmit}>
                      <Stack spacing={4} gap="30px">
                        <Flex direction="column" justify="20px">
                          <Stack spacing={4}>
                            <Input
                              placeholder="Nom du Projet"
                              onChange={handleTitle}
                              value={title}
                            />
                          </Stack>
                        </Flex>
                        <Flex direction="column">
                          <Stack spacing={4}>
                            <Select
                              name="Status"
                              onChange={handleStatus}
                              value={status}
                            >
                              <option value="" disabled selected>
                                Status
                              </option>
                              <option value="Idée">Idée</option>
                              <option value="Ouvert">Ouvert</option>
                              <option value="En cours">En cours</option>
                              <option value="Terminé">Terminé</option>
                            </Select>
                          </Stack>
                        </Flex>
                        <div className="editor">
                          {editor && <MenuBar editor={editor} />}
                          <EditorContent
                            className="editor__content"
                            editor={editor}
                          />
                        </div>
                      </Stack>
                      <Button mt={8} type="submit" w="full" variant="brand">
                        Enregistrer
                      </Button>
                    </Box>
                  </Stack>
                </Container>
              </Flex>
            </Box>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

CreateProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
