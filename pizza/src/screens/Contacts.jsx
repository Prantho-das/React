import React from "react";
import HeadMeta from "../components/HeadMeta";

function Contacts() {
  return (
    <div className="py-8">
      <HeadMeta title="Contact Now" />
      <h1 className="capitalize text-3xl text-center font-semibold">contact</h1>
      <div className="contact_card flex flex-col rounded-md shadow-xl px-6 py-5 md:w-1/3 w-10/12 mx-auto my-3">
        <div className="grid grid-cols-2 gap-4 my-2">
          <input type="text" className='input p-2' placeholder="Enter Your Name" />
          <input type="text" className='input p-2' placeholder="Enter Your Email" />
        </div>
        <textarea className='my-4 input pl-2 pt-2' rows="10" placeholder="Enter Your Message"></textarea>
        <button className='btn'>Contact Me</button>
      </div>
    </div>
  );
}

export default Contacts;
