import React from "react";
import Container from "./Container";

const Contacts = () => {
  return (
    <Container className="py-7">
      <div className="text-center items-center justify-center ">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-black">
            Let us handle your
          </h1>
          <h1 className="text-2xl font-semibold text-black">
            {" "}
            project, professionally.
          </h1>
        </div>
        <div className="mt-4">
          <form action="" className="space-y-7">
            <div className="space-x-10 ">
              <input
                className="p-2 w-1/3 bg-white outline-none border border-gray-400 rounded-md"
                placeholder="enter your name"
                type="text"
                name=""
                id=""
              />
              <input
                className="p-2 w-1/3 bg-white outline-none border border-gray-400 rounded-md"
                placeholder="enter your email"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="space-x-10 ">
              <input
                className="p-2 w-1/3 bg-white outline-none border border-gray-400 rounded-md"
                placeholder="enter your password"
                type="text"
                name=""
                id=""
              />
              <input
                className="p-2 w-1/3 bg-white outline-none border border-gray-400 rounded-md"
                placeholder="enter your contact number"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="space-x-10 ">
              <input
                className="p-2 w-1/3 bg-white outline-none border border-gray-400 rounded-md"
                placeholder="enter your name"
                type="text"
                name=""
                id=""
              />
              <input
                className="p-2 w-1/3 bg-white outline-none border border-gray-400 rounded-md"
                placeholder="enter your name"
                type="text"
                name=""
                id=""
              />
            </div>
          </form>
        </div>
        <button className="bg-btnColor mt-4 text-white px-6 py-3 font-medium rounded-md hover:bg-opacity-90 transition">
          Send Your Message
        </button>
      </div>
    </Container>
  );
};

export default Contacts;
