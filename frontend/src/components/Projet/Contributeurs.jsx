import {
  Avatar,
  Box,
  Button,
  Flex,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function Contributeurs() {
  return (
    <Flex
      direction="column"
      w="100%"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex
        align={{ sm: "flex-start", lg: "center" }}
        justify="space-between"
        w="100%"
        px="22px"
        pb="20px"
        mb="10px"
        boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
      >
        <Text fontSize="xl" fontWeight="600">
          Top Creators
        </Text>
        <Button variant="action">See all</Button>
      </Flex>
      <Table variant="simple" color="gray.500">
        <Thead>
          <Tr>
            <Th pe="10px" borderColor="transparent">
              <Text fontSize={{ sm: "10px", lg: "12px" }} color="gray.400">
                Name
              </Text>
            </Th>
            <Th pe="10px" borderColor="transparent">
              <Text fontSize={{ sm: "10px", lg: "12px" }} color="gray.400">
                ARTWORKS
              </Text>
            </Th>
            <Th pe="10px" borderColor="transparent">
              <Text fontSize={{ sm: "10px", lg: "12px" }} color="gray.400">
                RATING
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar
                  src="https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
                  w="30px"
                  h="30px"
                  me="8px"
                />
                <Text fontSize="sm" fontWeight="600">
                  @maddison_c21
                </Text>
              </Flex>
            </Td>
            <Td>
              <Text fontSize="sm" fontWeight="500">
                9821
              </Text>
            </Td>
            <Td>
              <Box>
                <Progress
                  variant="table"
                  colorScheme="brandScheme"
                  value={80}
                />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar
                  src="https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
                  w="30px"
                  h="30px"
                  me="8px"
                />
                <Text fontSize="sm" fontWeight="600">
                  @maddison_c21
                </Text>
              </Flex>
            </Td>
            <Td>
              <Text fontSize="sm" fontWeight="500">
                9821
              </Text>
            </Td>
            <Td>
              <Box>
                <Progress
                  variant="table"
                  colorScheme="brandScheme"
                  value={50}
                />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar
                  src="https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
                  w="30px"
                  h="30px"
                  me="8px"
                />
                <Text fontSize="sm" fontWeight="600">
                  @maddison_c21
                </Text>
              </Flex>
            </Td>
            <Td>
              <Text fontSize="sm" fontWeight="500">
                9821
              </Text>
            </Td>
            <Td>
              <Box>
                <Progress
                  variant="table"
                  colorScheme="brandScheme"
                  value={20}
                />
              </Box>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar
                  src="https://secure.gravatar.com/avatar/c308ee24184a32cdf10650eb7e311157?s=125&d=mm&r=G"
                  w="30px"
                  h="30px"
                  me="8px"
                />
                <Text fontSize="sm" fontWeight="600">
                  @maddison_c21
                </Text>
              </Flex>
            </Td>
            <Td>
              <Text fontSize="sm" fontWeight="500">
                9821
              </Text>
            </Td>
            <Td>
              <Box>
                <Progress
                  variant="table"
                  colorScheme="brandScheme"
                  value={70}
                />
              </Box>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
}
