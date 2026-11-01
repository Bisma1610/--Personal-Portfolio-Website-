import { useEffect, useState } from "react";
import { VStack, Center, Spinner, Text } from "@chakra-ui/react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import Footer from "../ui/Footer";

const HomeLayout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/home.json")
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return (
      <Center h="100vh" flexDirection="column">
        <Spinner size="xl" color="teal.400" />
        <Text mt={4} color="gray.400">
          Loading...
        </Text>
      </Center>
    );
  }

  const { hero, skills } = data;

  return (
    <VStack
      spacing={16}
      px={{ base: 4, md: 6 }}
      pt={12}
      pb={10}
      w="full"
      align="stretch"
    >
      <HomeHero hero={hero} />
      <HomeAbout hero={hero} skills={skills} />
      <Footer />
    </VStack>
  );
};

export default HomeLayout;
