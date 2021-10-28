import React from "react";
import { GrInProgress } from "react-icons/gr";

function Loading() {
  return (
    <>
      <div className="w-full h-xl bg-blue-100 flex justify-center items-center">
        <GrInProgress className="w-10/12 text-3xl"/>
      </div>
    </>
  );
}

export default Loading;
