import { Flex, Button, Input, Box, Text } from "@chakra-ui/react";

export default function Documents() {
  const fakeData = [
    {
      name: "Classeur1.xls",
      documentLink:
        "https://www.usinenouvelle.com/mediatheque/4/8/6/000907684_896x598_c.jpg",
    },
    {
      name: "Text.doc",
      documentLink:
        "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/b20c5e90-96bf-11e6-9781-00163ed833e7/2619814572/microsoft-word-Word_screenshot.png",
    },
    {
      name: "Pres.pdf",
      documentLink:
        "https://docs.microsoft.com/fr-fr/azure/information-protection/media/protected-pdf-in-adobe-reader.png",
    },
  ];
  return (
    <Flex>
      <Flex p="2rem" flexDir="column" w="100%" gap="4">
        <Button
          type="file"
          fontWeight="600"
          align="center"
          fontSize="xl"
          onClick={() => document.getElementById("inputHandler").click()}
        >
          <Input type="file" id="inputHandler" name="name" display="none" />{" "}
          Télécharger votre nouveau document
        </Button>
        {fakeData.map((data) => (
          <Flex
            flexDirection="column"
            alignItems="center"
            h="fit-content"
            w="100%"
            border="1px solid #ededed"
          >
            <Box
              role="group"
              h="240px"
              w="100%"
              bgImage={`url(${data.documentLink})`}
              bgSize="cover"
              bgRepeat="no-repeat"
              bgPosition="center"
              position="relative"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="space-between"
                height="0"
                w="100%"
                overflow="hidden"
                transition="all 0.3s ease-in-out"
                mt="240px"
                position="absolute"
                bgColor="rgba(255, 255, 255)"
                _groupHover={{
                  height: "100%",
                  justifyContent: "center",
                  mt: "0",
                  p: "10px",
                }}
              >
                <Text h="10%" textAlign="center" color="purple.average">
                  {data.name}
                </Text>
              </Box>
            </Box>
            {/* <Text color="#342c50">{data.name}</Text> */}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
