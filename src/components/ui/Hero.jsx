import React from "react";
import { Box, VStack, HStack, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

// ✅ Profile picture
import profilePic from "../../assets/profile.jpg";

export default function Hero({ hero }) {
  if (!hero) return <Text color="white" py={20} textAlign="center">Loading...</Text>;

  return (
    <HStack
      gap={10}
      flexWrap="wrap"
      justify="center"
      align="center"
      maxW="1200px"
      px={6}
      py={12}
      mx="auto"
    >
      {/* Left Section: Text & Buttons */}
      <VStack align="flex-start" spacing={4} maxW="600px">
        <Box
          borderRadius="6px"
          pt={8}
          px={5}
          py={2}
          color="white"
          backgroundColor="green.600"
          fontSize="3xl"
          fontWeight="bold"
        >
          Let’s Dive In
        </Box>

        <Heading size="3xl" color="white">{hero.name}</Heading>
        <Text color="white">{hero.description}</Text>

        {/* Buttons */}
        <HStack spacing={4}>
          {hero.buttons.map((btn, i) => {
            const isEmail = btn.text.toLowerCase().includes("contact");
            const isProject = btn.text.toLowerCase().includes("project");

            // Gmail compose URL
            const href = isEmail
              ? `https://mail.google.com/mail/?view=cm&fs=1&to=${btn.link.replace(/^mailto:/, "")}`
              : btn.link;

            return (
              <Link
                key={i}
                as={isProject ? RouterLink : isEmail ? "a" : "a"}
                to={isProject ? btn.link : undefined}      // React Router internal link
                href={isEmail ? href : undefined}          // Gmail link
                onClick={
                  isEmail
                    ? (e) => {
                        e.preventDefault();
                        window.open(href, "_blank");       // open Gmail in new tab
                      }
                    : undefined
                }
                isExternal={isEmail} // only email behaves as external
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  px={6}
                  py={4}
                  borderRadius="15px"
                  border={btn.type === "outline" ? "solid lightgray 0.5px" : "none"}
                  backgroundColor={btn.type === "solid" ? "green.500" : "white"}
                  color={btn.type === "solid" ? "white" : "black"}
                  display="flex"
                  alignItems="center"
                >
                  {isEmail ? <FaRegEnvelope size={20} /> : <MdOutlineShoppingBag size={20} />}
                  <Box ml={2}>{btn.text}</Box>
                </Button>
              </Link>
            );
          })}
        </HStack>
      </VStack>

      {/* Right Section: Profile Image */}
      <VStack>
        <Box borderRadius="full" shadow="2xl" overflow="hidden" maxW="300px">
          <Image
            src={profilePic}
            alt="Profile"
            objectFit="cover"
            boxSize="250px"
          />
        </Box>
      </VStack>
    </HStack>
  );
}
