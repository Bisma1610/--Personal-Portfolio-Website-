import { useEffect, useState } from "react";
import { Flex, Box, Button, HStack, Text, Skeleton, SkeletonText } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/header.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setHeaderData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load header:", err);
        setHeaderData({
          title: "Portfolio",
          styles: { bgColor: "gray.800", textColor: "white", height: "60px", paddingX: 4, paddingY: 2 },
          navItems: [{ label: "Home", path: "/" }]
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Flex
        as="header"
        position="sticky"
        top={0}
        left={0}
        right={0}
        height="60px"
        bg="gray.100"
        align="center"
        justify="space-between"
        px={4}
        zIndex={1000}
      >
        <SkeletonText noOfLines={1} width="200px" />
        <HStack spacing={2}>
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} height="30px" width="70px" />
          ))}
        </HStack>
      </Flex>
    );
  }

  const { title, styles, navItems } = headerData;

  return (
    <Flex
      as="header"
      bg={styles.bgColor}
      color={styles.textColor}
      align="center"
      justify="space-between"
      px={styles.paddingX}
      py={styles.paddingY}
      position="sticky"
      top={0}
      left={0}
      right={0}
      width="100vw"
      height={styles.height}
      zIndex={1000}
      shadow="sm"
    >
      <Box ml={2}>
        <Text fontSize="lg" fontWeight="bold" color={styles.textColor}>
          {title}
        </Text>
      </Box>

      <HStack spacing={2} mr={2}>
        {navItems.map((item, index) => (
          <Button
            key={index}
            as={Link}
            to={item.path}
            color={styles.textColor}
            variant="ghost"
            _hover={{ bg: styles.hoverBgColor || styles.bgColor }}
            size="sm"
          >
            {item.label}
          </Button>
        ))}
      </HStack>
    </Flex>
  );
}

export default Header;
