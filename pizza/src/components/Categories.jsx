import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="category mt-4 shadow-2xl rounded-md p-6">
        <div className="mb-4 ml-3">
          <h1 className="text-2xl mb-2 pr-2 text-green-500 font-semibold">
            Category
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <Link to='/category/1' className="rounded-md capitalize shadow-xl text-xl font-semibold p-3">
            prantho
          </Link>
          <Link to='/category/1' className="rounded-md capitalize shadow-xl text-xl font-semibold p-3">
            prantho
          </Link>
          <Link to='/category/1' className="rounded-md capitalize shadow-xl text-xl font-semibold p-3">
            prantho
          </Link>
          <Link to='/category/1' className="rounded-md capitalize shadow-xl text-xl font-semibold p-3">
            prantho
          </Link>
          <Link to='/category/1' className="rounded-md capitalize shadow-xl text-xl font-semibold p-3">
            prantho
          </Link>
          <Link to='/category/1' className="rounded-md capitalize shadow-xl text-xl font-semibold p-3">
            prantho
          </Link>
          <Link to='/category/1' className="rounded-md capitalize shadow-xl text-xl font-semibold p-3">
            prantho
          </Link>
          <Link to='/category/1' className="rounded-md capitalize shadow-xl text-xl font-semibold p-3">
            prantho
          </Link>
          <Link to='/category/1' className="rounded-md capitalize shadow-xl text-xl font-semibold p-3">
            prantho
          </Link>
        </div>
      </div>
    </>
  );
}

export default Categories;
