import { useEffect, useState } from "react";
import { axiosClient } from "../utils/helper";
import { PRODUCTS } from "../utils/routes";
import NewArrivalSection from "../components/index/NewArrivalSection";
import Slider from "../components/common/Slider";
import { MainCarouselTemplate } from "../components/index/MainCarouselTemplate";
import { Container } from "@mui/material";
import CategorySection from "../components/index/CategorySection";
import { PopularProductSection } from "../components/index/PopularProductSection";

const Index = () => {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosClient
      .get(PRODUCTS + "?limit=10")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosClient
      .get(PRODUCTS + "/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let slider = [
    import.meta.env.VITE_IMG_API + "?clothes",
    import.meta.env.VITE_IMG_API + "?lady",
    import.meta.env.VITE_IMG_API + "?dress",
  ];
  return (
    <>
      <div
        style={{
          position: "relative",
          marginTop: "4rem",
        }}
      >
        <Slider data={slider} template={MainCarouselTemplate} />
      </div>
      <Container maxWidth="lg">
        <NewArrivalSection products={products.slice(0,4)} />
        <CategorySection items={categories} />
        <PopularProductSection products={products} />
      </Container>
    </>
  );
};

export default Index;
