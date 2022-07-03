import { Box, Image, Text } from "@chakra-ui/react";
import useProducts from "../../store/useProducts";

const Ads = () => {
  const adImage = useProducts((e) => e.adImage);

  return adImage ? (
    <Box py={4}>
      <Text fontSize="20px">But first, a word from our sponsors</Text>
      <Image borderRadius={8} mt={2} src={adImage} width={400} h={250} />
    </Box>
  ) : (
    <></>
  );
};

export default Ads;
