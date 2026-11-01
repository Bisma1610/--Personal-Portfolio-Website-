import {
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  Badge,
  Icon,
  Circle,
  Flex,
} from "@chakra-ui/react";
import { MdLocationOn, MdDateRange, MdSchool } from "react-icons/md";

const iconMap = {
  MdSchool: MdSchool,
  MdLocationOn: MdLocationOn,
  MdDateRange: MdDateRange,
};

const EducationCard = ({ edu }) => {
  return (
    <Flex position="relative">
      <Circle
        size="50px"
        bg="teal.400"
        color="black"
        position="absolute"
        left="12px"
        top="0"
      >
        <Icon as={iconMap[edu.icon] || MdSchool} w={6} h={6} />
      </Circle>

      <Box
        ml="80px"
        bg="gray.900"
        p={6}
        borderRadius="2xl"
        shadow="xl"
        _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
      >
        <HStack justify="space-between" mb={2} wrap="wrap">
          <Heading size="md" color="teal.300">
            {edu.institution}
          </Heading>
          <HStack spacing={2} color="gray.400">
            <Icon as={MdDateRange} />
            <Text fontSize="sm">{edu.duration}</Text>
          </HStack>
        </HStack>

        <Text fontWeight="bold" color="blue.400" mb={2}>
          {edu.degree} - {edu.field}
        </Text>

        <HStack mt={1} spacing={2} color="gray.400" fontSize="sm">
          <Icon as={MdLocationOn} />
          <Text>{edu.location}</Text>
        </HStack>

        <Text mt={2} color="gray.300" fontSize="sm" mb={3}>
          {edu.description}
        </Text>

        {edu.courses && (
          <VStack align="start" spacing={2} mb={3}>
            <Text fontWeight="semibold" color="teal.400" fontSize="sm">
              Courses:
            </Text>
            <HStack spacing={2} wrap="wrap">
              {edu.courses.map((course, i) => (
                <Badge
                  key={i}
                  px={3}
                  py={1}
                  borderRadius="md"
                  bg="gray.800"
                  color="teal.300"
                  fontSize="0.75em"
                >
                  {course}
                </Badge>
              ))}
            </HStack>
          </VStack>
        )}

        {edu.achievements && (
          <VStack align="start" spacing={1}>
            <Text fontWeight="semibold" color="teal.400" fontSize="sm">
              Achievements:
            </Text>
            {edu.achievements.map((ach, index) => (
              <Text key={index} color="gray.300" fontSize="sm">
                • {ach}
              </Text>
            ))}
          </VStack>
        )}
      </Box>
    </Flex>
  );
};

export default EducationCard;
