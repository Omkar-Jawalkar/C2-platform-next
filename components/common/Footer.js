import React from "react";
import { HStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <HStack
      position={"absolute"}
      bottom={0}
      width={"100%"}
      justifyContent={"center"}
      p={6}
      bgGradient={"linear(to-r, #2D033B, #810CA8)"}
      spacing={6}
    >
      <Text color={"whiteAlpha.900"} fontSize={"lg"}>
        {" "}
        Made By US{" "}
      </Text>
    </HStack>
  );
};

export default Footer;
