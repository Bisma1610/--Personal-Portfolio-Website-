import { Box, VStack } from "@chakra-ui/react";
import EducationCard from "./EducationCard";

const EducationTimeline = ({ education }) => {
  return (
    <VStack
      position="relative"
      spacing={12}
      maxW="800px"
      mx="auto"
      align="stretch"
    >
      <Box
        position="absolute"
        left="25px"
        top={0}
        bottom={0}
        width="4px"
        bg="teal.400"
        borderRadius="full"
      />

      {education.map((edu) => (
        <EducationCard key={edu.id} edu={edu} />
      ))}
    </VStack>
  );
};

export default EducationTimeline;
