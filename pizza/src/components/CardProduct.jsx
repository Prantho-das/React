import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import pizza from "../assets/pizza.png";
import { excerpt } from "../data.js";
function CardProduct({ product }) {
  const { name, description, price, stock, img } = product;
  return (
    <div className="shadow-xl rounded-md ml-3 p-3 max-w-52">
      <div className="product_img max-w-full w-44">
        <img src={pizza} alt={img} />
      </div>
      <div className="description p-2 flex flex-col justify-center items-center">
        <Link to={'/product/'+img} className="text-lg capitalize underline font-semibold">{name}</Link>
        <p className="text-grey-500">{excerpt(description)}</p>
        <h5 className="text-white bg-green-500 py-1 px-3 text-md rounded-lg font-semibold my-2">{price}</h5>
      </div>
      {stock > 0 ? (
        <button className="outline-none flex justify-center items-center w-full py-1.5 text-white text-xl rounded-md bg-blue-500">
          <FaCartPlus />
        </button>
      ) : (
        <button
          className="outline-none flex justify-center items-center w-full py-1.5 text-white text-xl rounded-md bg-purple-500"
          disabled
          style={{ cursor: "unset" }}
        >
          <FaCartPlus />
        </button>
      )}
    </div>
  );
}

export default CardProduct;
