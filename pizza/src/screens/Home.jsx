import React from "react";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import HeadMeta from "../components/HeadMeta";
import MotionEffect from "../components/MotionEffect";
import RowCards from "../components/RowCards";
import { data } from "../data";

function Home() {
  const products = useSelector((state) => state.productReducer);

  return (
    <MotionEffect>
      <>
        <HeadMeta title="Home" />
        <RowCards title="New Item" data={data} />
        <div className="my-5">
          <Categories />
        </div>
        <RowCards title="Top Sale" data={data} />
      </>
    </MotionEffect>
  );
}

export default Home;
