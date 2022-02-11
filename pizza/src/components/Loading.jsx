import React from "react";
import { GrInProgress } from "react-icons/gr";

function Loading() {
  return (
    <>
      <div className="w-full h-xl flex justify-center items-center ">
        <GrInProgress className="w-10/12 text-3xl animate-spin"/>
      </div>
    </>
  );
}

export default Loading;
