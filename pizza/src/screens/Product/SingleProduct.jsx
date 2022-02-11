import React from "react";
import { GrCart } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { add_to_cart } from "../../app/actions/cartAction";
import pizza from "../../assets/pizza.png";
function SingleProduct() {
  const history = useHistory();
  const param = useParams();
  const dispatch = useDispatch();
  if (!param) {
    history.goBack();
  }
  let state = useSelector((state) => state.productReducer);
  const res = state.product.filter((val) => val.id === parseInt(param.id));
  let product=res[0]
  return (
    <>
      <div className="grid md:grid-cols-4 gap-6 ">
        <div className="col-span-2">
          <div className="main_img max-w-full flex justify-center mb-4">
            <img src={pizza} className="object-cover bg-cover" alt="prantho" />
          </div>
          <div className="flex flex-grow md:gap-3 gap-1 justify-center rounded-md">
            <img
              src={pizza}
              className="md:w-2/6 w-1/4 cursor-pointer border-2 border-blue-400 p-2"
              alt="prantho"
            />
            <img
              src={pizza}
              className="md:w-2/6 w-1/4 cursor-pointer border-2 mx-2 border-blue-400 p-2"
              alt="prantho"
            />
            <img
              src={pizza}
              className="md:w-2/6 w-1/4 cursor-pointer border-2 border-blue-400 p-2"
              alt="prantho"
            />
          </div>
        </div>
        <div className="col-span-2 p-6">
          <h1 className="text-blue-800 text-3xl">Name:{product.name}</h1>

          <details open={true} className="my-4">
            <summary>Description</summary>
            <p className="text-gray-600 text-lg text-semibold w-10/12">
              Description: {product.description}
            </p>
          </details>
          <h1 className="text-green-800 text-xl">price:{product.price} tk</h1>
          <h1 className="text-purple-500 mt-2 mb-4 text-xl">quantity:{product.stock}</h1>
          {
            product.stock?
          <button
            onClick={() => dispatch(add_to_cart(product.id))}
            className="btn flex justify-center items-center text-white font-semibold"
          >
            Add To <GrCart className="ml-1" style={{ fill: "white" }} />
          </button>:<h3 className="text-blue-500 text-5xl">Out of Stock</h3>
          }
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
