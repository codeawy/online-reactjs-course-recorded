import { Container, Grid } from "@chakra-ui/react";
import ProductItem from "../components/ProductItem";
import ProductsFilterBy from "../components/ProductsFilterBy";
import axios from "axios";
import ProductSkeleton from "../components/ProductSkeleton";
import { useQuery } from "react-query";
import { useState } from "react";

const HomePage = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const { isLoading, data, error } = useQuery(["products", checkedItems], () => getProductList());

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const getProductList = async () => {
    const { data } = await axios.get(
      `https://dummyjson.com/products?select=title,price,description,thumbnail${
        checkedItems[0] ? ",discountPercentage" : ""
      }${checkedItems[1] ? ",category" : ""}${checkedItems[2] ? ",brand" : ""}`
    );

    return data;
  };

  if (isLoading)
    return (
      <Grid templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"} gap={6}>
        {Array(20)
          .fill(1)
          .map((_, idx) => (
            <ProductSkeleton key={idx} />
          ))}
      </Grid>
    );

  const renderProductCards = data.products.map(product => (
    <ProductItem key={product.id} {...product} />
  ));

  return (
    <Container maxW="1500px" my={20}>
      <ProductsFilterBy
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        allChecked={allChecked}
        isIndeterminate={isIndeterminate}
      />
      <Grid gridTemplateColumns={"repeat(auto-fill, minmax(280px, 1fr))"} gap={5}>
        {renderProductCards}
      </Grid>
    </Container>
  );
};

export default HomePage;
