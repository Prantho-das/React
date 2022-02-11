import React, { useEffect } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
import { find_cart_info, subcart_total } from "../../data";
import pizza from "../../assets/pizza.png";
import { add_to_cart, remove_to_cart } from "../../app/actions/cartAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function ProductCart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  useEffect(() => {
    
  })
  return (
    <div>
      <h1 className="capitalize text-3xl text-blue-700 mb-6">cart page</h1>
      {state.cart.length > 0 ? (
        <div className="grid grid-cols-4 gap-3">
          <div className="md:col-span-3 col-span-4">
            <table className="w-full">
              <thead className="border-b-4 border-blue-600">
                <tr>
                  <th>Img</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {find_cart_info(state.cart).map((data, i) => {
                  return (
                    <tr className="mb-3 shadow-sm rounded-md p-3" key={i}>
                      <td className="text-center w-12">
                        <img src={pizza} className="cover" alt="" />
                      </td>
                      <td className="text-center">{data.name}</td>
                      <td className="text-center">{data.quantity}</td>
                      <td className="text-center">{data.price}</td>
                      <td className="text-center">
                        {data.quantity}
                        {data.price * data.quantity}
                      </td>
                      <td>
                        <div className="flex justify-evenly">
                          <button
                            onClick={() => dispatch(add_to_cart(data.id))}
                            className="text-green-500"
                          >
                            <FaPlusCircle />
                          </button>
                          <button
                            onClick={() => dispatch(remove_to_cart(data.id))}
                            className="text-red-400"
                          >
                            <FaMinusCircle />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="md:col-span-1 col-span-4 bg-gray-100 p-4 rounded-md shadow-sm">
            <h1 className="border-b-2 border-blue-200 mb-2 text-2xl">
              Total Amount:
            </h1>
            <h2>SubTotal:{subcart_total(find_cart_info(state.cart))}</h2>
            <h4>
              Vat:{subcart_total(find_cart_info(state.cart)) * 0.2}(0.2% VAT)
            </h4>
            <hr className="divide-y-2" />
            <h3>
              Total:
              {subcart_total(find_cart_info(state.cart)) +
                subcart_total(find_cart_info(state.cart)) * 0.2}
            </h3>
            <hr />
            <Link to='/' className="inline-block text-2xl py-1 px-2 rounded-md bg-blue-400 capitalize mt-5 text-white shadow-md">please sign in first</Link>
          </div>
        </div>
      ) : (
        <div className="text-4xl flex justify-center items-center">
          <h5 className=" text-blue-900">No Product Found</h5>
          <GrCart />
        </div>
      )}
    </div>
  );
}

export default ProductCart;
