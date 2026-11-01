import { Box } from "@chakra-ui/react";
import About from "../ui/About";

const HomeAbout = ({ hero, skills }) => {
  return (
    <Box
      w={{ base: "100%", md: "70%", lg: "60%" }}
      mx="auto"
      textAlign="center"
    >
      <About hero={hero} skills={skills} />
    </Box>
  );
};

export default HomeAbout;
