import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import useProducts from "../../store/useProducts";

const Header = () => {
  const { sorter, setSorter } = useProducts(({ sorter, setSorter }) => ({
    sorter,
    setSorter,
  }));

  return (
    <Box bg="blue.800" h="80px">
      <Flex
        maxW="1280px"
        m="auto"
        alignItems="center"
        h="80px"
        px={4}
        justifyContent="space-between"
      >
        <Text fontSize="2rem" color="white">
          Products
        </Text>
        <Flex alignItems="center">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Sort By
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setSorter("Title")}>Title</MenuItem>
              <MenuItem onClick={() => setSorter("Price")}>Price</MenuItem>
              <MenuItem onClick={() => setSorter("Rating")}>Rating</MenuItem>
            </MenuList>
          </Menu>
          {sorter && (
            <Text color="white" fontSize="20px" ml="1rem">
              {sorter}
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
