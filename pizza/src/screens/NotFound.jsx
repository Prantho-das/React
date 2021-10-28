import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="w-full h-xl flex justify-center items-center">
        <div className="relative">
          <h1 className="text-blue-300 md:text-9xl">404</h1>
          <h1 className="text-blue-800 md:text-9xl absolute top-1 left-2">
            404
          </h1>
          <Link to="/" className="btn flex items-center justify-center text-xl py-2 mt-4">
            Return <FaHome className="ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
