import React from "react";
import MotionEffect from "../../components/MotionEffect";
import RowCards from "../../components/RowCards";
import { data } from "../../data";
import HeadMeta from "../../components/HeadMeta"
function Product() {
  return (
    <MotionEffect>
      <HeadMeta title="Product" description="this is product page"/>
      <div>
        <RowCards title="New Item" data={data} />
      </div>
    </MotionEffect>
  );
}

export default Product;
