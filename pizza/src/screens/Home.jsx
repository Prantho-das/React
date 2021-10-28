import React from "react";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import HeadMeta from "../components/HeadMeta";
import RowCards from "../components/RowCards";
import { data } from "../data";
function Home() {
  const products = useSelector((state) => state.productReducer);
  return (
    <div>
      <HeadMeta title="Home" />
      <RowCards title="New Item" data={data} />
      <Categories/>
    </div>
  );
}

export default Home;
