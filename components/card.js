import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Image, Button } from "@chakra-ui/react";

export const Card = () => {
  return (
    <Stack
      border="2px"
      borderColor="#bdbdbd77"
      borderRadius="md"
      direction="row"
      justify="center"
      align="flex-start"
      w="fit-content"
      py="6"
      px="12"
      pl="8"
      transition="all 0.2s ease"
      _hover={{
        borderColor: "gray.400",
        transform: "scale(1.05)",
      }}
    >
      <Image
        src="https://www.pngall.com/wp-content/uploads/4/Wireless-Headphone-PNG-HD-Quality.png"
        alt="Headphone"
        w="200px"
        h="200px"
      />
      <Flex h="max" direction="column">
        <Text pt="4" lineHeight="1.2" fontSize="lg">
          Wireless Headphones
        </Text>
        <Text mt="2" fontSize="md" fontWeight="bold">
          $49.99
        </Text>
        <Button mt="5">Buy now</Button>
        <Box display="flex" mt="10" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            36 reviews
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
};
