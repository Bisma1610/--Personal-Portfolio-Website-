import { useEffect, useState } from "react";
import { Box, VStack, Center, Spinner } from "@chakra-ui/react";
import EducationHeader from "./EducationHeader";
import EducationTimeline from "./EducationTimeline";
import Footer from "../ui/Footer";

const EducationLayout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/education.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Failed to load education data:", err));
  }, []);

  if (!data) {
    return (
      <Center bg="black" minH="100vh" flexDirection="column">
        <Spinner size="xl" color="teal.400" />
      </Center>
    );
  }

  const { pageTitle, pageSubtitle, education } = data;

  return (
    <Box bg="black" color="white" minH="100vh" py={10} px={4}>
      <EducationHeader title={pageTitle} subtitle={pageSubtitle} />
      <EducationTimeline education={education} />
      <Box mt={12}>
        <Footer />
      </Box>
    </Box>
  );
};

export default EducationLayout;
