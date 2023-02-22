import { Grid } from "@chakra-ui/react";
import ProductItem from "./components/ProductItem";

const App = () => {
  const renderProductCards = Array.from({ length: 5 }, (_, idx) => <ProductItem key={idx} />);

  return (
    <Grid m={30} gridTemplateColumns={"repeat(auto-fill, minmax(280px, 1fr))"} gap={5}>
      {renderProductCards}
    </Grid>
  );
};

export default App;
