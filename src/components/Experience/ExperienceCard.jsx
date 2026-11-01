import { Box, Flex, HStack, VStack, Text, Heading, Icon, Circle, Badge } from "@chakra-ui/react";
import { MdLocationOn, MdDateRange, MdWork } from "react-icons/md";

const ExperienceCard = ({ exp }) => {
  return (
    <Flex position="relative">
      {/* Timeline Circle */}
      <Circle size="50px" bg="teal.400" color="black" position="absolute" left="12px" top="0">
        <Icon as={MdWork} w={6} h={6} />
      </Circle>

      {/* Card Box */}
      <Box
        ml="80px"
        bg="gray.900"
        borderRadius="2xl"
        shadow="xl"
        overflow="hidden" // ensures header and content stay inside
        _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
      >
        {/* Card Header */}
        <Box bg="teal.400" px={6} py={3}>
          <Heading size="md" color="black">{exp.role}</Heading>
        </Box>

        {/* Card Body */}
        <Box px={6} py={4}>
          <HStack justify="space-between" mb={2} wrap="wrap">
            <Heading size="sm" color="teal.300">{exp.company}</Heading>
            <HStack spacing={2} color="gray.400">
              <Icon as={MdDateRange} />
              <Text fontSize="sm">{exp.duration}</Text>
            </HStack>
          </HStack>

          {exp.location && (
            <HStack mt={1} spacing={2} color="gray.400" fontSize="sm">
              <Icon as={MdLocationOn} />
              <Text>{exp.location}</Text>
            </HStack>
          )}

          <Text mt={2} color="gray.300" fontSize="sm" mb={3}>
            {exp.description}
          </Text>

          {exp.techStack && (
            <VStack align="start" spacing={2} mb={3}>
              <Text fontWeight="semibold" color="teal.400" fontSize="sm">
                Tech Stack:
              </Text>
              <HStack spacing={2} wrap="wrap">
                {exp.techStack.map((tech, i) => (
                  <Badge
                    key={i}
                    px={3}
                    py={1}
                    borderRadius="md"
                    bg="gray.800"
                    color="teal.300"
                    fontSize="0.75em"
                  >
                    {tech}
                  </Badge>
                ))}
              </HStack>
            </VStack>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default ExperienceCard;
