import { useEffect, useState } from "react";
import { Box, Center, Spinner, VStack, Heading, Text } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import Footer from "../ui/Footer";

const ExperienceLayout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/experience.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Failed to load experience data:", err));
  }, []);

  if (!data) {
    return (
      <Center bg="black" minH="100vh" flexDirection="column">
        <Spinner size="xl" color="teal.400" />
      </Center>
    );
  }

  const { pageTitle, pageSubtitle, experiences } = data;

  return (
    <Box bg="black" color="white" minH="100vh" py={10} px={4}>
      {/* Page Header */}
      <VStack spacing={4} textAlign="center" py={10}>
        <Heading size="2xl" color="teal.400">{pageTitle}</Heading>
        <Text fontSize="lg" color="gray.400">{pageSubtitle}</Text>
      </VStack>

      {/* Timeline */}
      <VStack spacing={12} maxW="800px" mx="auto" align="stretch" position="relative">
        <Box
          position="absolute"
          left="25px"
          top={0}
          bottom={0}
          width="4px"
          bg="teal.400"
          borderRadius="full"
        />

        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </VStack>

      <Box mt={12}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ExperienceLayout;
