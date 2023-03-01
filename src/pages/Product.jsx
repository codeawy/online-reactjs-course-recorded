import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useQuery(["products", id], () => getProductList());

  console.log("PRODUCT =>", { isLoading, data, error });

  const getProductList = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

    return data;
  };
  console.log(data);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
      <Carousel>
        {data.images.map(item => (
          <div key={item}>
            <img src={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductPage;
