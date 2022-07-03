import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { renderDate } from "../../helpers/formatDate";
import useProducts from "../../store/useProducts";

const Products = () => {
  const products = useProducts((e) => e.products);
  const loading = useProducts((e) => e.loading);

  console.log(products);

  return (
    <>
      {products.length ? (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={6}
          gridAutoRows="1fr"
          margin="0 auto"
        >
          {products.map((product) => (
            <GridItem
              key={product.id}
              p={4}
              w="100%"
              bg="#FFFFFF"
              _hover={{
                bg: "gray.200",
              }}
              cursor="pointer"
              transition="0.5s ease-in"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              borderRadius="8px"
            >
              <Image
                src={product.thumbnail}
                h={200}
                margin="auto"
                border="1px solid white"
              />
              <Text
                mt={8}
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="15px"
              >
                {product.title}
              </Text>
              <Text fontWeight="bold" fontSize="13px">
                ${product.price.toLocaleString()}
              </Text>
              <Text fontSize="13px">{renderDate(product.date)}</Text>
              <Box mt="-4px">
                <StarRatings
                  rating={product.rating}
                  numberOfStars={5}
                  starDimension="16px"
                  starSpacing="0"
                  starRatedColor="#F7B011"
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <></>
      )}

      {loading && (
        <Flex justifyContent="center">
          <Box textAlign="center">
            <Spinner size="lg" />
            <Text
              mt="1rem"
              fontSize="md"
              textTransform="uppercase"
              fontWeight="bold"
            >
              - Loading Products -
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Products;
