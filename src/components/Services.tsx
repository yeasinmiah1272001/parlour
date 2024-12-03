"use client";
import React, { useState } from "react";
import Container from "./Container";
import { services } from "@/constant";
import Image from "next/image";

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <Container className="">
      <h1 className="text-center text-3xl">
        Our Awesome Category{" "}
        <strong className="text-btnColor"> Services</strong>
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto items-center justify-center">
        {(showAll ? services : services.slice(0, 3)).map((item, index) => (
          <div
            className="mx-auto mt-4 shadow-lg shadow-btnColor hover:bg-white  hover:shadow-gray-300 duration-300  px-6 py-5 text-center items-center justify-center"
            key={index}
          >
            <Image
              className="w-16 mx-auto "
              src={item.icon}
              alt="icon"
              height={100}
              width={100}
            />
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <h4 className="text-btnColor font-medium">{item.price} $</h4>
            <p>{item.des}</p>
          </div>
        ))}
      </div>
      <div className="flex mx-auto items-center justify-center mt-4">
        <button
          onClick={handleShowAll}
          className="bg-btnColor text-white px-6 py-3 font-medium rounded-md hover:bg-opacity-90 transition"
        >
          {showAll ? " Show Less" : " Show All"}
        </button>
      </div>
    </Container>
  );
};

export default Services;
