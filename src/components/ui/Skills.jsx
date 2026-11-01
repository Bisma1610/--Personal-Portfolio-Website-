import React from "react";
import { HStack, Box } from "@chakra-ui/react";

export default function Skills({ skills }) {
  return (
    <HStack flexWrap="wrap" spacing={3} justify="center">
      {skills.map((skill, index) => (
        <Box
          key={index}
          px={4}
          py={2}
          borderRadius="10px"
          bg="blue.100"       
          color="blue.700"     
          fontWeight="semibold"
        >
          {skill}
        </Box>
      ))}
    </HStack>
  );
}
