import React from "react";
import { GrCart } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import pizza from "../../assets/pizza.png";
function SingleProduct(props) {
  const history = useHistory();
  const param = useParams();
  if (!param) {
    history.goBack();
  }
  return (
    <>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="col-span-2">
          <div className="main_img max-w-full flex justify-center object-cover bg-cover mb-4">
            <img src={pizza} alt="prantho" />
          </div>
          <div className="flex justify-between items-center">
            <img
              src={pizza}
              className="w-2/6 cursor-pointer border-2 border-blue-400 p-2"
              alt="prantho"
            />
            <img
              src={pizza}
              className="w-2/6 cursor-pointer border-2 mx-2 border-blue-400 p-2"
              alt="prantho"
            />
            <img
              src={pizza}
              className="w-2/6 cursor-pointer border-2 border-blue-400 p-2"
              alt="prantho"
            />
          </div>
        </div>
        <div className="col-span-2 p-6">
          <h1 className='text-blue-800 text-3xl'>Name:Prantho</h1>
          <p  className='text-gray-600 my-3 text-lg text-semibold w-10/12'>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, est! Nulla at laudantium dolorum minima quisquam sit odit tempora iure!</p>
          <h1 className="text-green-800 text-xl">price:220 tk</h1>
          <h1 className='text-purple-500 mt-2 mb-4 text-xl'>quantity:40</h1>
          <button className='btn flex justify-center items-center text-white font-semibold'>Add To <GrCart className='text-white'/></button>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
