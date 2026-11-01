import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import Footer from "../ui/Footer";

const ContactLayout = () => {
  return (
    <Box bg="black" color="white" minH="100vh" py={10} px={4}>
      {/* Page Header */}
      <VStack spacing={4} py={10} textAlign="center">
        <Heading size="2xl" color="teal.400">
          Contact Me
        </Heading>
        <Text fontSize="lg" color="gray.400">
          Feel free to reach out for collaboration or just to say hi!
        </Text>
      </VStack>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Box mt={12}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ContactLayout;
