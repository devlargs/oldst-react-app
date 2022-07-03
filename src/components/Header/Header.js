import { Box, Flex, Text } from "@chakra-ui/react";

const Header = () => (
  <Box bg="blue.800" h="80px">
    <Flex maxW="1280px" m="auto" alignItems="center" h="80px" px={4}>
      <Text fontSize="2rem" color="white">
        Products
      </Text>
    </Flex>
  </Box>
);

export default Header;
