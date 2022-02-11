import React, { useState } from "react";
import { Link } from "react-router-dom";
import { category } from "../data";

function Categories() {
  const pageLimit = 5;
  const [load, setLoad] = useState(1);
  const pageNow = load * pageLimit;

  return (
    <>
      <div className="category mt-4 shadow-2xl rounded-md p-6">
        <div className="mb-4 ml-3">
          <h1 className="text-2xl mb-2 pr-2 text-green-500 font-semibold">
            Category
          </h1>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-8">
          {category
            ? category.slice(0, pageNow).map((d, i) => {
                return (
                  <Link
                  key={i}
                    to="/category/1"
                    className="rounded-md capitalize shadow-xl text-xl font-semibold p-3"
                  >
                    prantho
                  </Link>
                );
              })
            : "Sorry"}
        </div>
        <div className="w-full">
          {category &&
            (pageNow <= category.length ? (
              <button
                className="btn mt-4 block mx-auto"
                onClick={() => setLoad((prev) => prev + 1)}
              >
                Load More
              </button>
            ) : (
              ""
            ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
