import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import useProducts from "./store/useProducts";

const App = () => {
  const containerRef = useRef();
  const setLoading = useProducts((e) => e.setLoading);
  const limit = useProducts((e) => e.limit);
  const sorter = useProducts((e) => e.sorter);
  const [products, setProducts] = useProducts((e) => [
    e.products,
    e.setProducts,
  ]);
  const [page, setPage] = useProducts((e) => [e.page, e.setPage]);
  const [endOfCatalouge, setEndOfCatalouge] = useProducts((e) => [
    e.endOfCatalouge,
    e.setEndOfCatalouge,
  ]);

  const load = async (nextPage) => {
    if (!endOfCatalouge) {
      try {
        setLoading(true);
        const data = await fetch(
          `http://localhost:8000/products?_page=${
            nextPage ? nextPage : page
          }&_limit=${limit}`
        );
        const response = await data.json();
        if (!response.length) {
          setEndOfCatalouge(true);
        } else {
          setProducts([...products, ...response]);
        }
      } catch (ex) {
        console.error(ex);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    // load();
  }, [sorter]);

  const onScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        const nextPage = page + 1;
        setPage(nextPage);
        load(nextPage);
      }
    }
  };

  return (
    <>
      <Header />
      <Box
        h="calc(100vh - 80px)"
        bg="#F2F2F2"
        pt={10}
        px={4}
        overflow="auto"
        ref={containerRef}
        onScroll={onScroll}
      >
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
