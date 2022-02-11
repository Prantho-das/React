import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add_to_cart } from "../app/actions/cartAction";
import pizza from "../assets/pizza.png";
import { excerpt } from "../data.js";
function CardProduct({ product }) {
  const dispatch = useDispatch()
  const { id,name, description, price, stock, img } = product;
  return (
    <div className="shadow-2xl w-72 flex p-4 mb-2 flex-grow flex-col md:justify-center items-center">
      <div className="product_img max-w-full ">
        <img src={pizza} alt={img} />
      </div>
      <div className="description flex flex-col justify-center items-center">
        <Link
          to={"/product/" + id}
          className="text-lg capitalize underline font-semibold"
        >
          {name}
        </Link>
        <p className="text-grey-500 font-medium text-gray-500 text-justify">{excerpt(description)}</p>
        <h5 className="text-white w-1/5 text-center bg-green-500 py-1 px-3 text-md rounded-lg font-semibold my-2">
          {price}
        </h5>
      </div>
      {stock > 0 ? (
        <button onClick={()=>dispatch(add_to_cart(id))} className="outline-none flex justify-center items-center w-full py-1.5 text-white text-xl rounded-md bg-blue-500">
          <FaCartPlus />
        </button>
      ) : (
        <button
          className="outline-none flex justify-center cursor-not-allowed items-center w-full py-1.5 text-white text-xl rounded-md bg-purple-500"
          disabled
        >
          <FaCartPlus />
        </button>
      )}
    </div>
  );
}

export default CardProduct;
