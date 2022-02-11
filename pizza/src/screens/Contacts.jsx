import React from "react";
import { useState } from "react";
import HeadMeta from "../components/HeadMeta";
import MotionEffect from "../components/MotionEffect";

function Contacts() {
  const [con, setCon] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [conE, setConE] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactUs = () => {
    if (con.name.length <= 0) {
      setConE({ name: "Please Fill Up Name" });
      return false;
    }
    if (con.email.length <= 0) {
      setConE({email: "Please Fill Up Email" });
      return false;
    }
    if (con.message.length <= 0) {
      setConE({ message: "Please Fill Up Message" });
      return false;
    }
    alert('prantho')
    setCon({
      name:"",
      email:"",
      message:""
    })
    setConE({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <MotionEffect>
      <div className="md:py-8 py-5">
        <HeadMeta title="Contact Now" />
        <h1 className="capitalize text-3xl text-center font-semibold">
          contact
        </h1>
        <span className="text-red-400 text-center block font-semibold">{conE.name&&conE.name}</span>
        <span className="text-red-400 text-center block font-semibold">{conE.email&&conE.email}</span>
        <span className="text-red-400 text-center block font-semibold">{conE.message&&conE.message}</span>
        <div className="contact_card flex flex-col rounded-md shadow-xl px-6 py-5 md:w-1/2 w-10/12 mx-auto my-3">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-2">
            <input
              type="text"
              className="input p-2"
              placeholder="Enter Your Name"
              value={con.name}
              onChange={(e) => setCon({ ...con, name: e.target.value })}
            />
            <input
              type="text"
              className="input p-2"
              placeholder="Enter Your Email"
              value={con.email}
              onChange={(e) => setCon({ ...con, email: e.target.value })}
            />
          </div>
          <textarea
            className="my-4 input pl-2 pt-2"
            rows="7"
            placeholder="Enter Your Message"
            value={con.message}
            onChange={(e) => setCon({ ...con, message: e.target.value })}
          ></textarea>
          <button onClick={contactUs} className="btn">
            Contact Me
          </button>
        </div>
      </div>
    </MotionEffect>
  );
}

export default Contacts;
