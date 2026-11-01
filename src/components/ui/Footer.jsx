import React, { useEffect, useState } from "react";
import { Box, VStack, HStack, Heading, Text, Link } from "@chakra-ui/react";
import { FaRegEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const iconMap = {
  FaRegEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin
};

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch("/footer.json")
      .then(res => res.json())
      .then(data => setFooterData(data))
      .catch(err => console.error("Failed to load footer data:", err));
  }, []);

  if (!footerData) return null;

  const { title, socialLinks, copyright } = footerData;

  return (
    <Box as="footer" py={10} width="100%">
      <VStack spacing={10}>
        {title && <Heading size="lg">{title}</Heading>}

        <HStack spacing={8}>
          {socialLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon];
            if (!IconComponent) return null;

            // For email, convert mailto to Gmail compose URL
            const href =
              link.icon === "FaRegEnvelope"
                ? `https://mail.google.com/mail/?view=cm&fs=1&to=${link.url.replace(/^mailto:/, "")}`
                : link.url; // GitHub/Instagram URLs from JSON

            return (
              <Link
                key={index}
                href={href}
                onClick={(e) => {
                  e.preventDefault(); // prevent default navigation
                  window.open(href, "_blank"); // open in new tab
                }}
                aria-label={link.platform}
                _hover={{ opacity: 0.8 }}
              >
                <IconComponent size={42} />
              </Link>
            );
          })}
        </HStack>

        {copyright && (
          <Text fontSize="lg" color="gray.500">
            {copyright}
          </Text>
        )}
      </VStack>
    </Box>
  );
}
