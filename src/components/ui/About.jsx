import React from "react";
import { VStack, Box, Heading, Text } from "@chakra-ui/react";
import { MdOutlinePerson } from "react-icons/md";
import Skills from "./Skills";

export default function About({ hero, skills }) {
  return (
    <VStack
      bg="teal.400"  // fixed typo
      px={10}
      py={12}
      borderRadius="20px"
      shadow="2xl"
      spacing={5}
      maxW="800px"
      textAlign="center"
    >
      {/* Icon */}
      <Box borderRadius="full" px={4} py={2} bg="green.600">
        <MdOutlinePerson color="white" size={60} />
      </Box>

      {/* Heading */}
      <Heading size="xl" color="black" fontWeight="bold">
        About Me
      </Heading>

      {/* Content Box */}
      <VStack
        bg="black"
        px={10}
        py={12}
        borderRadius="20px"
        shadow="2xl"
        spacing={5}
        maxW="800px"
        textAlign="center"
      >
        <Text>
          My name is <Text as="span" color="blue.600">{hero.name}</Text>, and I am passionate about data analysis, web development, and building innovative solutions. I am a third-year Computer Science student, passionate about technology and innovation. I am eager to build my career independently and explore opportunities where I can apply my skills, learn continuously, and contribute meaningfully.
        </Text>

        <Text>
          My skills include <Text as="span" color="blue.600">{skills.join(", ")}</Text>.
        </Text>

        <Skills skills={skills} />
      </VStack>
    </VStack>
  );
}
