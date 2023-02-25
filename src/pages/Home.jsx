import { Container, Grid } from "@chakra-ui/react";
import ProductItem from "../components/ProductItem";
import ProductsFilterBy from "../components/ProductsFilterBy";

const HomePage = () => {
  const renderProductCards = Array.from({ length: 15 }, (_, idx) => <ProductItem key={idx} />);

  return (
    <Container maxW="1500px" my={20}>
      <ProductsFilterBy />
      <Grid gridTemplateColumns={"repeat(auto-fill, minmax(280px, 1fr))"} gap={5}>
        {renderProductCards}
      </Grid>
    </Container>
  );
};

export default HomePage;
