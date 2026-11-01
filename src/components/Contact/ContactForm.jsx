import { useState } from "react";
import { Box, VStack, Input, Textarea, Button, Center } from "@chakra-ui/react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! I will get back to you soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Center>
      <Box
        bg="gray.900"
        p={6}
        borderRadius="2xl"
        shadow="xl"
        maxW="600px"
        w="100%"
      >
        <VStack as="form" spacing={4} onSubmit={handleSubmit} align="stretch">
          <Input
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            isRequired
            bg="gray.800"
            color="white"
          />
          <Input
            placeholder="Your Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            isRequired
            bg="gray.800"
            color="white"
          />
          <Input
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            bg="gray.800"
            color="white"
          />
          <Input
            placeholder="Message Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            bg="gray.800"
            color="white"
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            isRequired
            bg="gray.800"
            color="white"
            minH="150px"
          />
          <Button type="submit" w="100%" bg="teal.400">
            Send Message
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default ContactForm;
