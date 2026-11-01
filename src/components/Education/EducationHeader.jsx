import { VStack, Heading, Text } from "@chakra-ui/react";

const EducationHeader = ({ title, subtitle }) => {
  return (
    <VStack spacing={4} textAlign="center" py={10}>
      <Heading size="2xl" color="teal.400">
        {title}
      </Heading>
      <Text fontSize="lg" color="gray.400">
        {subtitle}
      </Text>
    </VStack>
  );
};

export default EducationHeader;
