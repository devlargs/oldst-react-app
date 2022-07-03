import { Box, useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Ads from "./components/Ads";
import Header from "./components/Header";
import Products from "./components/Products";
import useProducts from "./store/useProducts";

const API_URL = "http://localhost:8000";
const App = () => {
  const toast = useToast();
  const containerRef = useRef();
  const [loading, setLoading] = useProducts((e) => [e.loading, e.setLoading]);
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
  const setAdImage = useProducts((e) => e.setAdImage);
  const [counter, setCounter] = useState(1);
  const [previousImages, setPreviousImages] = useState([]);

  const load = async (nextPage) => {
    if (!endOfCatalouge) {
      try {
        setLoading(true);
        const data = await fetch(
          `${API_URL}/products?_page=${
            nextPage ? nextPage : page
          }&_limit=${limit}${sorter && `&_sort=${sorter.toLowerCase()}`}`
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
  }, []); // eslint-disable-line

  useEffect(() => {
    load();
  }, [sorter]); // eslint-disable-line

  // detect every 20 items
  useEffect(() => {
    if (products.length / counter === 20) {
      const getImage = async () => {
        const data = await fetch(
          `${API_URL}/ads/?r=${Math.floor(Math.random() * 1000)}`
        );

        if (previousImages.includes(data.url)) {
          getImage();
        } else {
          setPreviousImages((e) => [...e, data.url]);
          setAdImage(data.url);
          setCounter((e) => e + 1);
          const dom = document.getElementById("container");

          dom.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          toast({
            title: "A new ad came up. Please have a look.",
            status: "success",
            position: "top-center",
          });
        }
      };

      getImage();
    }
    // eslint-disable-next-line
  }, [products]);

  const onScroll = () => {
    if (containerRef.current) {
      if (!loading) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight === scrollHeight) {
          const nextPage = page + 1;
          setPage(nextPage);
          load(nextPage);
        }
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
        id="container"
        scrollBehavior="smooth"
      >
        <Box maxW="1280px" m="auto">
          <Box pb={4}>
            <Ads />
            <Products />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
