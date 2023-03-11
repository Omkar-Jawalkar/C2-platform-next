import React from "react";
import {
  Box,
  Stack,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import Ranking from "./Ranking";

const index = () => {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Stack
          direction={["column", "row"]}
          alignItems={"stretch"}
          flexDir={{ base: "column", md: "row" }}
          p={4}
          display={"flex"}
        >
          {" "}
          <Box
            color={"whiteAlpha.900"}
            boxShadow="md"
            rounded="md"
            bg="#1167b1"
            p={3}
            flex={{ base: 1, md: 1 }}
          >
            <Heading fontSize={"md"}>Student Dashboard</Heading>
          </Box>
          <Stack
            color={"whiteAlpha.900"}
            boxShadow="md"
            rounded="md"
            p={3}
            bg="#1167b1"
            flex={{ base: 1, md: 2 }}
            display={"flex"}
            justifyContent={"flex-start"}
          >
            <Heading fontSize={"md"} mb={{ base: 2, lg: 6 }}>
              <Text fontSize="xs">Institute | </Text>
              Dr. D.Y. Patil Institute of Engineering, Management and Research{" "}
            </Heading>

            <HStack justifyContent={"center"} spacing={4}>
              <Box backgroundColor={"whiteAlpha.900"} p="4">
                <Text color={"black"} fontSize="xs">
                  {" "}
                  Total Students : 420
                </Text>
              </Box>
              <Box backgroundColor={"whiteAlpha.900"} p="4">
                <Text color={"black"} fontSize="xs">
                  {" "}
                  Total Students : 420
                </Text>
              </Box>

              <Box backgroundColor={"whiteAlpha.900"} p="4">
                <Text color={"black"} fontSize="xs">
                  {" "}
                  Total Students : 420
                </Text>
              </Box>
            </HStack>
          </Stack>
        </Stack>

        <Ranking />
      </Flex>
    </>
  );
};

export default index;
