import { Box, VStack, HStack, Heading, Text, Button, Image } from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  return (
    <Box
      borderRadius="2xl"
      overflow="hidden"
      shadow="xl"
      _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
    >
      {/* Top Image */}
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          w="100%"
          h={{ base: "200px", md: "250px" }}
          objectFit="cover"
        />
      )}

      {/* Bottom Info Box */}
      <Box bg="teal.400" p={6}>
        <VStack align="start" spacing={3}>
          <Heading size="md" color="white">{project.title}</Heading>
          <Text color="gray.100">{project.description}</Text>

          <HStack spacing={2} wrap="wrap">
            {project.techStack?.map((tech, idx) => (
              <Box
                key={idx}
                px={3}
                py={1}
                borderRadius="md"
                bg="gray.800"
                color="teal.300"
                fontSize="0.75em"
              >
                {tech}
              </Box>
            ))}
          </HStack>

          {project.link && (
            <Button
              as="a"
              href={project.link}
              target="_blank"
              mt={4}
              w="100%" // long button
              bg="purple.300" // button background
              _hover={{ bg: "purple.400" }}
              color="black"
            >
              View Project
            </Button>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
