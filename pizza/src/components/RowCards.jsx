import React from "react";
import CardProduct from "./CardProduct";
function RowCards({ title, data }) {
  return (
    <>
      <div className="mb-4 ml-3 relative">
        <h1
          style={{ maxWidth: "fit-content" }}
          className="text-2xl mb-2 pr-2 text-green-500 font-semibold border-r-4 border-pink-500"
        >
          {title}
        </h1>
        <div className="underline absolute left-7 w-1/12 h-1.5 rounded-md bg-pink-500"></div>
      </div>
      <div className="flex py-1 overflow-x-scroll no-scroll overflow-y-hidden">
        {data.map((d, i) => {
          return <CardProduct product={d} key={i} />;
        })}
      </div>
    </>
  );
}

export default RowCards;
