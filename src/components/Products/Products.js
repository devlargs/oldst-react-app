import { Box, Grid, GridItem, Image, Spinner, Text } from "@chakra-ui/react";
import useProducts from "../../store/useProducts";

const Products = () => {
  const products = useProducts((e) => e.products);
  const loading = useProducts((e) => e.loading);

  return (
    <>
      {products.length ? (
        <Grid
          templateColumns="repeat(4, 1fr)"
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
                bg: "blue.700",
                color: "white",
              }}
              cursor="pointer"
              transition="0.5s ease-in"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              borderRadius="8px"
            >
              <Image src={product.thumbnail} h={200} margin="auto" />
              <Text
                textAlign="center"
                mt={8}
                textTransform="uppercase"
                fontWeight="bold"
              >
                {product.title}
              </Text>
              <Text textAlign="center" fontWeight="bold">
                ${product.price.toLocaleString()}
              </Text>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <></>
      )}

      {loading && (
        <Box d="flex" justifyContent="center">
          <Spinner size="lg" />
        </Box>
      )}
    </>
  );
};

export default Products;
