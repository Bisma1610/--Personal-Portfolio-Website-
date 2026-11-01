import { useEffect, useState } from "react";
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Center, 
  Spinner, 
  SimpleGrid 
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import Footer from "../ui/Footer";

// Import images
import project1Img from "../../assets/project1.jpg";
import project2Img from "../../assets/project2.jpg";

const ProjectsLayout = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const projectsWithImages = data.projects.map((proj) => {
          if (proj.id === 1) proj.image = project1Img;
          if (proj.id === 2) proj.image = project2Img;
          return proj;
        });
        setProjects(projectsWithImages);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!projects) {
    return (
      <Center bg="black" minH="100vh" flexDirection="column">
        <Spinner size="xl" color="teal.400" />
      </Center>
    );
  }

  return (
    <Box bg="black" color="white" minH="100vh" py={{ base: 8, md: 12 }} px={{ base: 4, md: 8 }}>
      {/* Page Header */}
      <VStack spacing={4} textAlign="center" py={10}>
        <Heading size="2xl" color="teal.400">My Projects</Heading>
        <Text fontSize="lg" color="gray.400">Some of the projects I have worked on</Text>
      </VStack>

      {/* Projects Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 12 }} // horizontal and vertical spacing
        maxW="1200px"
        mx="auto"
      >
        {projects.map((project) => (
          <Box key={project.id} px={2}> {/* horizontal padding */}
            <ProjectCard project={project} />
          </Box>
        ))}
      </SimpleGrid>

      {/* Footer */}
      <Box mt={16}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProjectsLayout;
