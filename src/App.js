import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import useProducts from "./store/useProducts";

const App = () => {
  const [_, setProducts] = useProducts((e) => [e.products, e.setProducts]);
  const [loading, setLoading] = useProducts((e) => [e.loading, e.setLoading]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);

  const load = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        `http://localhost:8000/products?_page=${page}&_limit=${limit}`
      );
      const response = await data.json();
      console.log(response);
      setProducts(response);
    } catch (ex) {
      console.error(ex);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <Header />
      <Box h="calc(100vh - 80px)" bg="#F2F2F2" pt={10} px={4} overflow="auto">
        <Box maxW="1280px" m="auto">
          <Box pb={4}>
            <Products />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
